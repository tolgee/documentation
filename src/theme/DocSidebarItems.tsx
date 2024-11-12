import React, { memo } from 'react';
// @ts-ignore
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
import { default as DsDocSidebarItems } from '@theme/DocSidebarItems';
import { TolgeeDocsVersionDropdown } from './NavbarItem/TolgeeDocsVersionDropdown';

const DocSidebarItems: typeof DsDocSidebarItems = ({ items, ...props }) => {
  const isRoot = props.level === 1;
  return (
    <DocSidebarItemsExpandedStateProvider>
      {isRoot && (
        <>
          <div className="sidebar-version-dropdown">
            <TolgeeDocsVersionDropdown />
          </div>
        </>
      )}
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
};

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
