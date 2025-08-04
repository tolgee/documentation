import React, { useEffect, useState } from 'react';
import { GitHub } from '@mui/icons-material';
import Link from '@docusaurus/Link';

import './GithubButton.css';

let cachedData: number | undefined;

export const GithubButton = () => {
  const [stars, setStars] = useState<number | undefined>(cachedData);

  useEffect(() => {
    let unmounted = false;

    fetch('https://api.github.com/repos/tolgee/tolgee-platform')
      .then((data) => data.json())
      .then((response) => {
        if (!unmounted) {
          setStars(response.watchers_count);
          cachedData = response.watchers_count;
        }
      });
    return () => {
      unmounted = true;
    };
  }, []);

  return stars !== undefined ? (
    <div className="github-btn">
      <Link
        className="github-btn--container"
        target="_blank"
        rel="noreferrer noopener"
        to="https://github.com/tolgee/tolgee-platform"
      >
        <GitHub className="github-btn--logo" />
      </Link>
      <Link
        className="github-btn--count"
        target="_blank"
        rel="noreferrer noopener"
        to="https://github.com/tolgee/tolgee-platform/stargazers"
      >
        <span>{stars.toLocaleString('en')}</span>
      </Link>
    </div>
  ) : null;
};
