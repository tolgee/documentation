import React, { type ReactNode } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): ReactNode {
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
