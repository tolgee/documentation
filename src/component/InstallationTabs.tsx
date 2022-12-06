import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export function InstallationTabs({ lib }) {
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
        <CodeBlock language="shell">npm install {lib}</CodeBlock>
      </TabItem>
      <TabItem value="yarn">
        <CodeBlock language="shell">yarn add {lib}</CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock language="shell">pnpm install {lib}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}
