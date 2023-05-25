import React, { FC } from 'react';
import dataExample from '../../../platform/generated/platformConfigurationProps.json';
import MDXContent from '@theme/MDXContent';

export type Data = typeof dataExample;
export type Group = Data[1] | Data[2] | Data[3] | Data[4] | Data[5];

export const Docs: FC<{ data: Data }> = ({ data }) => {
  // const items = data.map((item, idx) =>
  //   item?.children?.length < 1 ? (
  //
  //   ) : (
  //     <Group key={idx} item={item} />
  //   )
  // );

  return <MDXContent>{`#Hi all`}</MDXContent>;
};
