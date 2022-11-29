import React, { memo } from 'react';
// @ts-ignore
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
import SearchBar from '@theme/SearchBar';
import { default as DsDocSidebarItems } from '@theme/DocSidebarItems';
import { TolgeeDocsVersionDropdown } from './NavbarItem/TolgeeDocsVersionDropdown';

const DocSidebarItems: typeof DsDocSidebarItems = ({ items, ...props }) => {
  const isRoot = props.level === 1;
  return (
    <DocSidebarItemsExpandedStateProvider>
      {isRoot && (
        <>
          <div className="sidebar-search py-2 [&>button]:rounded-[10px]">
            <SearchBar />
          </div>
          <div className="sidebar-version-dropdown">
            <div className="sidebar-version-dropdown__version">
              Select version
            </div>
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
