import LogoAngular from "../../static/img/technologies/logo-angular.svg";
import LogoSvelte from "../../static/img/technologies/logo-svelte.svg";
import LogoVue from "../../static/img/technologies/logo-vue.svg";
import LogoGatsby from "../../static/img/technologies/logo-gatsby.svg";
import LogoNext from "../../static/img/technologies/logo-next.svg";
import LogoReact from "../../static/img/technologies/logo-react.svg";
import React, {FC} from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

const TechnologyLink = (props) => (<Link {...props} className="[&>*]:grayscale [&>*]:min-w-[45px] [&>*]:h-[45px] md:[&>*]:min-w-[60px] md:[&>*]:h-[60px]"/>)

export const TechnologyIcons: FC<{ className?: string }> = ({className}) => <div
  className={clsx("home-technologies flex flex-shrink gap-3 flex-wrap mt-8", className)}>
  <TechnologyLink to="integrations/react">
    <LogoReact/>
  </TechnologyLink>
  <TechnologyLink to="integrations/angular">
    <LogoAngular/>
  </TechnologyLink>
  <TechnologyLink to="integrations/next">
    <LogoNext/>
  </TechnologyLink>
  <TechnologyLink to="integrations/vue">
    <LogoVue/>
  </TechnologyLink>
  <TechnologyLink to="integrations/svelte">
    <LogoSvelte/>
  </TechnologyLink>
  <TechnologyLink to="integrations/gatsby">
    <LogoGatsby/>
  </TechnologyLink>

</div>;
