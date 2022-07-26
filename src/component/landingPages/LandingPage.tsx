import React, { FC } from "react";
import Layout from "../../theme/Layout";
import "./LandingPage.css";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {PageHeader} from "../pageComponents/header/PageHeader";

export const LandingPage: FC<{
  title: string;
}> = ({ title, children }) => (
  <>
    <div>
      <DecoratedLayout title={title}>
        {children}
      </DecoratedLayout>
    </div>
  </>
);
