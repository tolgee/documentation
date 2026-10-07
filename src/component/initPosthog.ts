import posthog from 'posthog-js';

const SESSION_COOKIE = 'tg_sid';
const COOKIE_LIFETIME_SECONDS = 90 * 24 * 3600;

/**
 * Counterpart: scripts/framer/posthog-init.html in the tolgee-company repo. A change to one is a change to
 * both.
 *
 * `persistence: 'memory'` stays: a cookie or localStorage entry for marketing analytics would need a
 * consent banner we do not have. Memory alone mints a new anonymous id on every page load, which makes the
 * anonymous journey one pageview long and the backend's `$anon_distinct_id` merge worthless, so the id is
 * bootstrapped from `tg_sid`, the marketing session cookie this site already shares with tolgee.io. No
 * second cookie and no sessionStorage: one id serves the session, the anonymous person and the merge.
 *
 * This mints `tg_sid` when it is absent rather than waiting for the server to. The arrival POST in
 * marketingTouch.ts is fire-and-forget, so its response lands long after posthog has picked an id, and a
 * visitor whose cookie only appears afterwards would have their landing pageview under a throwaway id that
 * is never merged. The backend adopts an unrecognised UUID instead of replacing it.
 *
 * `isIdentifiedID` is deliberately absent: the person has to stay anonymous for the backend's `$identify`
 * to merge this id into the account at signup. The webapp carries the same project token and calls
 * `posthog.identify(userId)`, which is why the cookie value is prefixed rather than used raw, so an
 * anonymous id can never equal a logged-in customer's own distinct id.
 *
 * `person_profiles` is `'always'` rather than the cheaper `'identified_only'` because under
 * `'identified_only'` an anonymous visitor has no person record, so that merge write fails silently and
 * posthog-js clears the id without retrying. The cost is PostHog's person-profiles rate on every event plus
 * a person per visitor, both of which sit inside the 1M free allowances at current traffic.
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

/**
 * Unguessability is the whole security property of the id, so there is no `Math.random` fallback: a weak id
 * would be worse than no id, because the backend adopts whatever UUID it is handed.
 */
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
