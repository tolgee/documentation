import React from 'react';
import CodeBlock from '@theme/CodeBlock';
// @ts-ignore
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

type Props = Omit<React.ComponentProps<typeof CodeBlock>, 'children'> & {
  code: string;
};

export function CodeWithVersion({ code, ...props }: Props) {
  const { activeVersion } = useActivePluginAndVersion();
  const { label: versionLabel } = activeVersion;
  const versionSegment = activeVersion.isLast ? '' : ':v' + versionLabel;

  return (
    <CodeBlock {...props}>
      {code?.replace(/{{version}}/, versionSegment)}
    </CodeBlock>
  );
}
