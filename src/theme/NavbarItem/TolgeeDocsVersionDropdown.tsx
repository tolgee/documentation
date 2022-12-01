import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import {
  useActivePluginAndVersion,
  useVersions,
  //@ts-ignore
} from '@docusaurus/plugin-content-docs/client';
import React from 'react';

export const TolgeeDocsVersionDropdown = (props) => {
  const active = useActivePluginAndVersion();
  const activePluginId = active?.activePlugin?.pluginId;
  const versions = activePluginId && useVersions(active.activePlugin.pluginId);

  if (!versions || versions.length < 2) {
    return null;
  }

  return (
    <DocsVersionDropdownNavbarItem
      docsPluginId={activePluginId}
      dropdownItemsBefore={[]}
      dropdownItemsAfter={[]}
      dropdownLabel="Select version"
      {...props}
    />
  );
};
