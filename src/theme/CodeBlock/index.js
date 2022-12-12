import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

export default function CodeBlockWrapper(props) {
  const { activeVersion } = useActivePluginAndVersion();
  const { label: versionLabel } = activeVersion;
  const versionSegment = activeVersion.isLast ? '' : ':v' + versionLabel;

  const newProps = {
    ...props,
    children: props.children?.replace(/{{dockerTagVersion}}/, versionSegment),
  };

  return (
    <>
      <CodeBlock {...newProps} />
    </>
  );
}
