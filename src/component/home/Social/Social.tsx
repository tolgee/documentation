import React, {useEffect} from "react";
import "./Social.css";
import {appendScript} from "../../externalScripts/appendScript";

export const Social = () => {
  useEffect(() => {
    const removeGithub = appendScript("https://buttons.github.io/buttons.js");

    return () => {
      removeGithub();
    };
  }, []);

  return (
    <div className="social">
      <div className="github__thanks">Thanks for your support! ⭐ ❤️</div>
      <div className="github__buttons">
        <a
          className="github-button"
          href="https://github.com/tolgee/server"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star tolgee/server on GitHub"
        >
          Tolgee Server
        </a>

        <a
          className="github-button"
          href="https://github.com/tolgee/tolgee-js"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star tolgee/tolgee-js on GitHub"
        >
          Tolgee JS
        </a>
      </div>
      <div className="connect_ask">Need help? We are here! 💬</div>
      <div className="connect_button">
        <a
          href="https://github.com/tolgee/server/discussions"
          target="_blank"
        >
          <img
            src="https://img.shields.io/github/discussions/tolgee/server?style=for-the-badge"
            alt="Github discussions"
          />
        </a>
        <a
          href="https://join.slack.com/t/tolgeecommunity/shared_invite/zt-16l0sf7ae-6fmAl2Fb9wqFCV0uzSa7bw"
          target="_blank"
        >
          <img
            src="https://img.shields.io/badge/slack-Tolgee%20community-blue?style=for-the-badge"
            alt="Tolgee community slack"
          />
        </a>
      </div>
    </div>
  );
};
