import Link from "@docusaurus/Link";
import LogoAngular from "../../../static/img/technologies/logo-angular.svg";
import LogoSvelte from "../../../static/img/technologies/logo-svelte.svg";
import LogoVue from "../../../static/img/technologies/logo-vue.svg";
import LogoGatsby from "../../../static/img/technologies/logo-gatsby.svg";
import LogoNext from "../../../static/img/technologies/logo-next.svg";
import LogoReact from "../../../static/img/technologies/logo-react.svg";
import React from "react";

const TechnologyLink = (props) => (<Link {...props} className="[&>*]:grayscale [&>*]:min-w-[45px] [&>*]:h-[45px] md:[&>*]:min-w-[60px] md:[&>*]:h-[60px]"/>)

export const Technologies = () => <section className="flex justify-center">
  <div className="max-w-[700px] mx-12 my-32">
    <h2 className="text-gradient text-3xl md:text-[40px] mb-8">One tool rules them all.</h2>
    <p className="text-[20px]">Tolgee has integrations for all <span className="text-gradient">major JS frameworks</span>.
      It’s super easy to integrate and you don’t have to look for any other tool to translate your app.</p>
    <div className="home-technologies flex flex-shrink gap-3 flex-wrap mt-8">
      <TechnologyLink to="integrations/angular">
        <LogoAngular/>
      </TechnologyLink>
      <TechnologyLink to="integrations/svelte">
        <LogoSvelte/>
      </TechnologyLink>
      <TechnologyLink to="integrations/vue">
        <LogoVue/>
      </TechnologyLink>
      <TechnologyLink to="integrations/gatsby">
        <LogoGatsby/>
      </TechnologyLink>
      <TechnologyLink to="integrations/next">
        <LogoNext/>
      </TechnologyLink>
      <TechnologyLink to="integrations/react">
        <LogoReact/>
      </TechnologyLink>
    </div>
  </div>
</section>;
