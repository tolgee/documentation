import posthog from 'posthog-js';

const SESSION_COOKIE = 'tg_sid';
const COOKIE_LIFETIME_SECONDS = 90 * 24 * 3600;

/**
 * Counterpart: scripts/framer/posthog-init.html in the tolgee-company repo. A change to one is a change to
 * both.
 *
 * `persistence: 'memory'` has no store to survive a page load, so without `bootstrap` the anonymous id is
 * new on every one and the backend's `$anon_distinct_id` merge silently matches nothing. The cookie value
 * is prefixed because the webapp calls `posthog.identify(userId)` under this same token, and an anonymous
 * id that equalled a real one would merge a customer onto themselves.
 *
 * Minting `tg_sid` here relies on the backend adopting an unrecognised UUID rather than replacing it.
 */
export function initPosthog({
  token,
  host,
  cookieRoot,
}: {
  token: string;
  host: string;
  cookieRoot: string;
}) {
  const sessionId = readCookie(SESSION_COOKIE) || mintSessionCookie(cookieRoot);
  posthog.init(token, {
    api_host: host,
    person_profiles: 'always',
    capture_pageview: false,
    persistence: 'memory',
    bootstrap: sessionId ? { distinctID: `tgs_${sessionId}` } : undefined,
  });
}

function readCookie(name: string): string {
  try {
    const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return match ? decodeURIComponent(match.pop() as string) : '';
  } catch (e) {
    return '';
  }
}

/** No `Math.random` fallback on purpose: the backend adopts whatever UUID it is handed. */
function mintSessionCookie(root: string): string {
  try {
    if (typeof crypto === 'undefined' || !crypto.randomUUID) {
      return '';
    }
    const id = crypto.randomUUID();
    document.cookie =
      `${SESSION_COOKIE}=${id}; domain=.${root}; path=/; ` +
      `max-age=${COOKIE_LIFETIME_SECONDS}; secure; samesite=lax`;
    return id;
  } catch (e) {
    return '';
  }
}
