import React, { FC } from "react";
import Layout from "../../theme/Layout";
import "./LandingPage.css";

export const LandingPage: FC<{
  title: string;
}> = ({ title, children }) => (
  <>
    <div>
      <Layout title={title}>
        <div className="integration">{children}</div>
      </Layout>
    </div>
  </>
);
