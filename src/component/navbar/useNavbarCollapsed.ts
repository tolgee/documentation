import { useEffect, useState } from 'react';

/**
 * Width below which the full desktop navbar (logo, wordmark, GitHub stars, all
 * section links, Login/Sign up and search) no longer fits, so the navigation
 * links collapse into the hamburger sidebar. Keep in sync with the matching
 * media queries in src/css/custom.css and Content/styles.module.css.
 */
export const NAVBAR_COLLAPSE_QUERY = '(max-width: 1320px)';

export function useNavbarCollapsed(): boolean {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(NAVBAR_COLLAPSE_QUERY);
    const update = () => setCollapsed(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return collapsed;
}
