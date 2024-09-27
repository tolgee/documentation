import posthog from 'posthog-js';

export function initPosthog({ token, host }: { token: string; host: string }) {
  posthog.init(token, {
    api_host: host,
    person_profiles: 'identified_only',
    capture_pageview: false,
    persistence: 'memory',
  });
}
