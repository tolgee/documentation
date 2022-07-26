import React from "react";
import Layout from "../../theme/Layout";
import "./openSource.css";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {PageHeader} from "../../component/pageComponents/header/PageHeader";
import {PageHeaderTitle} from "../../component/pageComponents/header/PageHeaderTitle";
import {PageHeaderSubtitle} from "../../component/pageComponents/header/PageHeaderSubtitle";
import {GradientText} from "../../component/GradientText";

export default () => {
  return (
    <div>
      <DecoratedLayout title={`Why open-source?`}>
        <PageHeader className="mb-[180px]">
          <PageHeaderTitle active>Opensource is our passion.</PageHeaderTitle>
          <PageHeaderSubtitle>Why so?</PageHeaderSubtitle>
        </PageHeader>

        <div className="container opensource__container">
          <p>Open-source is just a wonderful thing 😍</p>

          <p>
            In Tolgee, we decided to follow the open-source model, and we
            believe that it is the best to widely distribute the tool.
            Developers usually prefer open-source solutions, and it is for sure
            a smart decision for many reasons. That’s also why today
            open&#x2011;source software is growing more popular and widespread
            all over the IT world. 🌐
          </p>

          <p>
            However, not everything is for free, even when it comes to
            open&#x2011;source software. 💸 Tolgee is free to run on your own
            infrastructure, or you can pay us for cloud storage, computing
            power, and maintenance of the system. Believe it or not, even with
            these expenses, our open&#x2011;source solution is way cheaper than
            other closed&#x2011;source alternatives.
          </p>

          <p>
            We make no secrets about our plan to build a good business with
            Tolgee. With an open&#x2011;source business model, we believe we can
            bring high value to companies and to individuals and have a
            well&#x2011;running company at the same time. 💜 In an ideal world,
            companies could create great localized products without being
            restricted to a single vendor.
          </p>

          <p>
            Tolgee is not all&#x2011;powerful. Not yet, anyway. 😜 But with the
            power of the community, we can collaborate on new integrations and
            features together, making Tolgee accessible to many more users and
            clearing the way for them for easy localization of their projects.
          </p>

          <h2><GradientText>So what are Tolgee’s revenue streams?</GradientText></h2>

          <p>
            We’re planning multiple ways for how to cover the developing cost of
            the Tolgee tool. In the near future, it would primarily be:
          </p>

          <p>
            👨‍💻 <GradientText>Software as a Service</GradientText> &#x2011; Firstly, paying for the
            cloud system hosted by Tolgee will save time for developers
            maintaining the system and make the whole process more comfortable.
          </p>

          <p>
            🛒 <GradientText>Marketplace of translators</GradientText> &#x2011; We plan to create a
            place where you can find IT&#x2011;experienced translators to
            translate your projects fast.
          </p>
        </div>
      </DecoratedLayout>
    </div>
  );
};
