import React from "react";
import Link from "@docusaurus/Link";

export const Pricing = () => {

  return (
    <section className="flex flex-col items-center font-[300]">
      <div className="max-w-[900px] grid md:grid-cols-4 gap-6 m-6 p-6 md:m-20 md:mb-10 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200 dark:shadow-black/80 home-pricing-decorated">
        <div className="md:row-span-3">
          <h2 className="text-[60px] font-[200] mb-0"><span className="text-gradient">Free</span></h2>
        </div>
        <div className="md:col-span-3"><p className="text-[24px] md:text-[28px] mb-0">Get <span className="text-gradient">3,000</span> translations & <span
          className="text-gradient">10,000</span> machine translation
          credits for free.</p></div>
        <div className="md:col-span-3">
          <ul className="list-none p-0 text-[20px] md:text-[22px] mt-0">
            <li>Unlimited users</li>
            <li>Unlimited projects</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <a href="https://app.tolgee.io/sign_up" className="button--primary mb-12">Sign up for free</a>
        </div>
      </div>
      <Link to="/pricing" className="md:mb-10 underline font-[400] text-[18px]">More pricing plans</Link>
    </section>
  );
}
