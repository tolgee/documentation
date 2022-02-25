import React, { useEffect } from "react";

import {useColorMode} from '@docusaurus/theme-common';

export const LayoutContent = ({ children }) => {
  const { isDarkTheme } = useColorMode();

  useEffect(() => {
    // this switches cookie content to dark mode
    if (isDarkTheme) {
      document.body.classList.add("c_darkmode");
    } else {
      document.body.classList.remove("c_darkmode");
    }
  }, [isDarkTheme]);
  return <>{children}</>;
};
