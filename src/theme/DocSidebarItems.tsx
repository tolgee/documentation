import React, { memo } from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';
import { default as DsDocSidebarItems } from '@theme/DocSidebarItems';
import { TolgeeDocsVersionDropdown } from './NavbarItem/TolgeeDocsVersionDropdown';
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/plugin-content-docs/lib/client/docSidebarItemsExpandedState.js';

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
