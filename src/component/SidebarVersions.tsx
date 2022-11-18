import {
  useActivePluginAndVersion,
  useVersions,
  // @ts-ignore
} from '@docusaurus/plugin-content-docs/client';
import React, { ComponentProps } from 'react';
import DocSidebarItem from '@theme/DocSidebarItem';

type ItemProps = ComponentProps<typeof DocSidebarItem>;

type Props = Omit<ItemProps, 'item'>;

export const SidebarVersions = (props: Props) => {
  const active = useActivePluginAndVersion();
  const activePluginId = active?.activePlugin?.pluginId;
  const versions = activePluginId && useVersions(active.activePlugin.pluginId);

  const item: ItemProps['item'] = {
    type: 'category',
    label: 'Versions',
    collapsed: true,
    collapsible: true,
    items: versions.map((version) => ({
      type: 'link',
      href: version.path,
      label: version.label,
    })),
  };

  if (versions.length < 2) {
    return null;
  }

  return <DocSidebarItem item={item} {...props} />;
};
