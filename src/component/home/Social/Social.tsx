import React, { useEffect } from "react";
import "./Social.css";

const appendScript = (url: string) => {
  const script = document.createElement("script");
  script.src = url;
  script.defer = true;
  script.async = true;
  document.head.append(script);
  return () => {
    document.head.removeChild(script);
  };
};

export const Social = () => {
  useEffect(() => {
    const removeGithub = appendScript("https://buttons.github.io/buttons.js");

    return () => {
      removeGithub();
    };
  }, []);

  return (
    <div className="container social">
      <div className="github">
        <div className="github__thanks">
          Thanks for staring or following our project! 👍
        </div>
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
      </div>
    </div>
  );
};
