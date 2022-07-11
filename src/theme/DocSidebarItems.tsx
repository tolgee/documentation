import React, {memo} from 'react';
import {DocSidebarItemsExpandedStateProvider} from '@docusaurus/theme-common';
import DocSidebarItem from '@theme/DocSidebarItem';
import SearchBar from "@theme/SearchBar"

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({items, ...props}) {
  return (
    <DocSidebarItemsExpandedStateProvider>
      {props.level === 1 && <div className="sidebar-search py-2 [&>button]:bg-gray-100 [&>button]:dark:bg-black [&>button]:rounded-[10px]">
        <SearchBar/>
      </div>}
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props as any} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

export default memo(DocSidebarItems);
