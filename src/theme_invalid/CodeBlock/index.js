import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

export default function CodeBlockWrapper(props) {
  const activeVersion = useActivePluginAndVersion()?.activeVersion;
  const versionLabel = activeVersion?.label;
  const isLast = activeVersion?.isLast;
  const versionSegment = !versionLabel || isLast ? '' : ':v' + versionLabel;

  const children =
    typeof props.children === 'string'
      ? props.children.replace(/{{dockerTagVersion}}/, versionSegment)
      : props.children;

  const newProps = {
    ...props,
    children,
  };

  return (
    <>
      <CodeBlock {...newProps} />
    </>
  );
}
