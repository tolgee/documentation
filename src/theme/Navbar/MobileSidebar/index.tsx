import React, { type ReactNode } from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

import { useNavbarCollapsed } from '../../../component/navbar/useNavbarCollapsed';

export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const collapsed = useNavbarCollapsed();
  useLockBodyScroll(mobileSidebar.shown);

  // Docusaurus only renders the drawer below its hardcoded 996px breakpoint
  // (mobileSidebar.shouldRender). We render it whenever the navbar is collapsed
  // so the hamburger works across the whole sub-1320px range, not just mobile.
  if (!collapsed && !mobileSidebar.shown) {
    return null;
  }

  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
