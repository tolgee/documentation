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
 * An arrival is new when this tab has not seen this referrer before, or when it carries campaign params it
 * has not seen before. Two keys, not one combined key: `document.referrer` survives a client-side route
 * change but `location.search` does not, so any fingerprint that mixes them re-reports one visit as two the
 * moment the visitor clicks an internal link.
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

/**
 * The campaign half of the arrival fingerprint: the campaign params only, never the whole query string.
 * `location.search` changes on the first internal navigation while `document.referrer` does not, so
 * fingerprinting the whole search re-reports one visit as two. Fingerprinting the referrer alone has the
 * opposite failure: a paid click landing in a tab that already saw an organic arrival from the same
 * referrer would be dropped, which would lose gclid capture that today's snippet gets right.
 */
function campaignFingerprint(params: URLSearchParams): string {
  const values = CAMPAIGN_PARAMS.map((key) => params.get(key) ?? '');
  // Empty string when the URL carries no campaign at all. Joining six empty values would give "|||||",
  // which is a distinct fingerprint rather than the "no campaign" sentinel `alreadyReported` tests for.
  return values.some((value) => value !== '') ? values.join('|') : '';
}

function short(value: string | null, max: number): string | undefined {
  if (!value) {
    return undefined;
  }
  return value.slice(0, max);
}

/**
 * The distinct id is passed in, never read off `window`. This site loads posthog-js as an ES module and
 * nothing assigns `window.posthog`, so reading the global here would leave `p` absent on every docs arrival
 * forever. The Framer site is the opposite case: its HTML snippet loader does create the global.
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
