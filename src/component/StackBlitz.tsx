import React, { useEffect, useRef } from 'react';
import sdk, { EmbedOptions } from '@stackblitz/sdk';

type Props = EmbedOptions & {
  slug: string;
};

export function StackBlitz({ slug, ...options }: Props) {
  const el = useRef();

  useEffect(() => {
    sdk.embedProjectId(el.current, slug, {
      view: 'editor',
      openFile: 'index.ts',
      hideNavigation: true,
      hideDevTools: true,
      hideExplorer: true,
      showSidebar: false,
      height: 450,
      ...options,
    });
  }, []);

  return <div ref={el} />;
}
