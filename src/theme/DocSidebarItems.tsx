import React, { memo } from 'react';
// @ts-ignore
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
import SearchBar from '@theme/SearchBar';
import { SidebarVersions } from '../component/SidebarVersions';
import { default as DsDocSidebarItems } from '@theme/DocSidebarItems';

export type DocSidebarItemsProps = React.ComponentProps<
  typeof DsDocSidebarItems
>;

const DocSidebarItems: typeof DsDocSidebarItems = ({ items, ...props }) => {
  const isRoot = props.level === 1;
  return (
    <DocSidebarItemsExpandedStateProvider>
      {isRoot && (
        <div className="sidebar-search py-2 [&>button]:rounded-[10px]">
          <SearchBar />
        </div>
      )}
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
      {isRoot && <SidebarVersions {...props} index={items.length} />}
    </DocSidebarItemsExpandedStateProvider>
  );
};

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
