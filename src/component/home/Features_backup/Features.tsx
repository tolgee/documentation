import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./Features.css";
import LogoAngular from "../../../../static/img/technologies/logo-angular.svg";
import LogoGatsby from "../../../../static/img/technologies/logo-gatsby.svg";
import LogoNext from "../../../../static/img/technologies/logo-next.svg";
import LogoReact from "../../../../static/img/technologies/logo-react.svg";
import LogoVue from "../../../../static/img/technologies/logo-vue.svg";
import LogoSvelte from "../../../../static/img/technologies/logo-svelte.svg";

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
              <Link to="integrations/angular">
                <LogoAngular  />
              </Link>
              <Link to="integrations/svelte">
                <LogoSvelte className="technology__smaller" />
              </Link>
              <Link to="integrations/vue">
                <LogoVue className="technology__smaller" />
              </Link>
              <Link to="integrations/gatsby">
                <LogoGatsby className="technology__smaller" />
              </Link>
              <Link to="integrations/next">
                <LogoNext className="technology__smaller" />
              </Link>
              <Link to="integrations/react">
                <LogoReact />
              </Link>
            </div>
          </div>
          <div className="feature__image">
            <img src="/img/home/AllInOneImage.svg" alt="All in one"/>
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
            <img src="/img/home/In-context-editing.svg" alt="In context-editing"/>
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
            <img src="/img/home/screenshots.svg" alt="Take screenshots"/>
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
            <img src="/img/home/Integration-in-one-minute.svg" alt="Integrate fast"/>
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
            <img src="/img/home/mouse-opensource.svg" alt="Integrate fast"/>
          </div>
        </div>
      </div>
    </section>
  );
};
