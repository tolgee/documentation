import posthog from 'posthog-js';

export function initPosthog({ token, host }: { token: string; host: string }) {
  posthog.init(token, {
    api_host: host,
    person_profiles: 'identified_only',
    capture_pageview: false,
    // Not 'memory': the anonymous id has to survive a page load for the marketing session to stitch to it.
    persistence: 'localStorage+cookie',
    // One anonymous id across tolgee.io and docs.tolgee.io.
    cross_subdomain_cookie: true,
    // The webapp owns the default store under this same token and calls posthog.identify(userId) in it, so
    // without a store of its own the marketing sites would read an identified id and ask PostHog to alias
    // one customer onto another person.
    persistence_name: 'tg_marketing',
  });
}
