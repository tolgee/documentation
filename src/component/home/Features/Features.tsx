import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./Features.css";
import { AllInOneImage } from "./images/AllInOneImage";
// @ts-ignore
import IntegrationInLessThenOneMinute from "./images/Integration-in-one-minute.svg";
// @ts-ignore
import ProvideContext from "./images/screenshots.svg";
// @ts-ignore
import InContextEditing from "./images/In-context-editing.svg";
// @ts-ignore
import MouseOpenSource from "./images/mouse-opensource.svg";

// @ts-ignore
import logoAngular from "./images/technologies/logo-angular.png";
// @ts-ignore
import logoGatsby from "./images/technologies/logo-gatsby.png";
// @ts-ignore
import logoJs from "./images/technologies/logo-js.png";
// @ts-ignore
import logoNext from "./images/technologies/logo-next.png";
// @ts-ignore
import logoPhp from "./images/technologies/logo-php.png";
// @ts-ignore
import logoReact from "./images/technologies/logo-react.png";

export const Features = () => {
  return (
    <section>
      <div className="feature">
        <div className="container">
          <div className="feature__content">
            <div className="feature__header">
              All in One localization solution
            </div>
            <div className="feature__text">
              You no longer have to worry about choosing the right i18n library,
              editor, or platform. Tolgee is the only tool you need to translate
              your web-based project to any language you wish.
            </div>
            <div className="feature__text">
              Tolgee consists of a localization platform and SDKs you can
              integrate into your projects.
            </div>
            <div className="feature__technologies">
              <Link to="docs/web/using_with_angular/installation">
                <img src={logoAngular} alt="Angular" />
              </Link>
              <Link to="/docs/web/using_with_react/ssr/using_with_gatsby">
                <img src={logoGatsby} alt="Gatsby" />
              </Link>
              <Link to="/docs/web/using_with_npm/installation">
                <img src={logoJs} alt="JS" />
              </Link>
              <Link to="/docs/web/using_with_react/ssr/using_with_next">
                <img src={logoNext} alt="Next.js" />
              </Link>
              <Link to="/docs/web/using_with_php">
                <img src={logoPhp} alt="PHP" />
              </Link>
              <Link to="/docs/web/using_with_react/installation">
                <img src={logoReact} alt="React.js" />
              </Link>
            </div>
          </div>
          <div className="feature__image">
            <AllInOneImage />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="feature__content">
            <div className="feature__header">
              Save time with in-context editing
            </div>
            <div className="feature__text">
              With Tolgee SDK, you can simply translate your texts by
              ALT&nbsp;+&nbsp;clicking them directly in the app you develop. No
              more looking for keys in your source, no more editing localization
              files, and no more data exporting for translators.
            </div>

            <div className="feature__text">
              You also have access to app localization with an enabled
              in-context editing feature to other members of the project team or
              translators. Now everybody can do localization-related tasks
              instead of developers.
            </div>
          </div>
          <div className="feature__image">
            <InContextEditing />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="feature__content">
            <div className="feature__header">
              Provide context for translators
            </div>
            <div className="feature__text">
              The core reason behind all inaccurate translations is missing
              context. Uploading screenshots to provide context has never been
              so simple.
            </div>
            <div className="feature__text">
              Screenshots can be automatically generated in an in-context
              editing view using the Tolgee Chrome plugin.
            </div>
          </div>
          <div className="feature__image">
            <ProvideContext />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="feature__content">
            <div className="feature__header">
              Integrate in less than one minute
            </div>
            <div className="feature__text">
              Yes, you can integrate Tolgee into your app in less than one
              minute.
            </div>

            <div className="feature__text">
              Our platform provides integration guides, which help you to get
              started incredibly fast.
            </div>
          </div>
          <div className="feature__image">
            <IntegrationInLessThenOneMinute />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="feature__content">
            <div className="feature__header">It is Open-Source!</div>
            <div className="feature__text">
              Yes, Tolgee is free to use, and it's very simple to deploy it
              locally or on your private infrastructure.
            </div>
            <div className="feature__text">
              <Link
                to={useBaseUrl(
                  "docs/platform/self_hosting/running_with_docker"
                )}
              >
                Learn how to deploy it!
              </Link>
            </div>
          </div>
          <div className="feature__image">
            <MouseOpenSource />
          </div>
        </div>
      </div>
    </section>
  );
};
