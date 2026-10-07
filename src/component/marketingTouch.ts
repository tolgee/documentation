const COOKIE = 'tg_sid';
const SEEN_REFERRER_KEY = 'tg_touch_ref';
const SEEN_CAMPAIGN_KEY = 'tg_touch_cmp';
const CAMPAIGN_PARAMS = [
  'gclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

function readCookie(name: string): string {
  const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return match ? decodeURIComponent(match.pop() as string) : '';
}

function writeSessionCookie(sessionId: string, root: string): void {
  document.cookie =
    `${COOKIE}=${sessionId}; domain=.${root}; path=/; ` +
    `max-age=${90 * 24 * 3600}; secure; samesite=lax`;
}

function isExternalArrival(referrer: string, root: string): boolean {
  if (!referrer) {
    return true;
  }
  try {
    const host = new URL(referrer).hostname;
    return host !== root && !host.endsWith(`.${root}`);
  } catch (e) {
    return true;
  }
}

/**
 * Two keys rather than one combined one: `document.referrer` survives a client-side route change but
 * `location.search` does not, so a fingerprint mixing them re-reports one visit on the first internal click.
 */
function alreadyReported(referrer: string, campaign: string): boolean {
  try {
    const seenReferrer = sessionStorage.getItem(SEEN_REFERRER_KEY) === referrer;
    const seenCampaign =
      campaign === '' || sessionStorage.getItem(SEEN_CAMPAIGN_KEY) === campaign;

    if (seenReferrer && seenCampaign) {
      return true;
    }

    sessionStorage.setItem(SEEN_REFERRER_KEY, referrer);
    if (campaign !== '') {
      sessionStorage.setItem(SEEN_CAMPAIGN_KEY, campaign);
    }
  } catch (e) {
    // private mode or blocked storage: fall through and report
  }
  return false;
}

function campaignFingerprint(params: URLSearchParams): string {
  const values = CAMPAIGN_PARAMS.map((key) => params.get(key) ?? '');
  // Empty string, not "|||||": `alreadyReported` tests for "" as the no-campaign sentinel.
  return values.some((value) => value !== '') ? values.join('|') : '';
}

function short(value: string | null, max: number): string | undefined {
  if (!value) {
    return undefined;
  }
  return value.slice(0, max);
}

/**
 * `distinctId` is passed in rather than read off `window`: this site loads posthog-js as an ES module and
 * never assigns the global, so reading it here would leave `p` absent on every docs arrival.
 */
export function reportMarketingTouch(
  endpoint: string,
  root: string,
  distinctId?: string
): void {
  if (!endpoint) {
    return;
  }
  try {
    const params = new URLSearchParams(window.location.search);
    const hasCampaign = CAMPAIGN_PARAMS.some((key) => params.get(key));

    if (!isExternalArrival(document.referrer, root) && !hasCampaign) {
      return;
    }

    if (alreadyReported(document.referrer, campaignFingerprint(params))) {
      return;
    }

    const sessionId = readCookie(COOKIE);

    const payload = {
      id: sessionId || undefined,
      c: short(params.get('gclid'), 255),
      s: short(params.get('utm_source'), 255),
      m: short(params.get('utm_medium'), 255),
      cp: short(params.get('utm_campaign'), 255),
      t: short(params.get('utm_term'), 255),
      ct: short(params.get('utm_content'), 255),
      r: short(document.referrer, 2048),
      l: short(window.location.pathname, 255),
      p: short(distinctId ?? null, 255),
    };

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!data || !data.sessionId) {
          return;
        }
        writeSessionCookie(data.sessionId, root);
      })
      .catch(() => undefined);
  } catch (e) {
    // never throw into the host page
  }
}
