import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
//@ts-ignore
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

export function InstallationTabs({ lib }) {
  const { activeVersion } = useActivePluginAndVersion();
  const { label: versionLabel } = activeVersion;
  const versionSegment = activeVersion.isLast ? '' : '@' + versionLabel;

  return (
    <Tabs
      defaultValue="npm"
      values={[
        { label: 'npm', value: 'npm' },
        { label: 'yarn', value: 'yarn' },
        { label: 'pnpm', value: 'pnpm' },
      ]}
    >
      <TabItem value="npm">
        <CodeBlock language="shell">
          npm install {lib}
          {versionSegment}
        </CodeBlock>
      </TabItem>
      <TabItem value="yarn">
        <CodeBlock language="shell">
          yarn add {lib}
          {versionSegment}
        </CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock language="shell">
          pnpm install {lib}
          {versionSegment}
        </CodeBlock>
      </TabItem>
    </Tabs>
  );
}
