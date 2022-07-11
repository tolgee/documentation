import React from "react";
import Link from "@docusaurus/Link";

export const NotConvincedYet = () => {

  return (
    <section className="flex flex-col items-center font-[300] my-32 mx-4">
      <div className="max-w-[500px] flex flex-col items-center">
        <h2>Not convinced yet?</h2>
        <p className="text-[20px] text-center mb-0">Not sure whether Tolgee is great match for you?</p>
        <p className="text-[20px] text-center">Just reach out to us at <a href="mailto:info@tolgee.io">info@tolgee.io</a> or
          continue with reading
          the <Link to="/docs">docs</Link>.</p>
      </div>
    </section>
  );
}
