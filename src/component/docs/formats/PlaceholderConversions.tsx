import React, { FC, ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '../../table/Table';
import clsx from 'clsx';

export type PlaceholderConversionData = [
  {
    specifier: ReactNode;
    icuType: ReactNode;
    example: ReactNode;
    exampleConverted: ReactNode;
    note: ReactNode;
  }
];

export const PlaceholderConversion: FC<{
  data: PlaceholderConversionData;
  originalName: ReactNode;
  target: 'original' | 'icu';
}> = (props) => {
  const tolgeeIcuHeader = 'Univeral ICU';

  const first =
    props.target === 'original' ? props.originalName : tolgeeIcuHeader;
  const second =
    props.target === 'original' ? tolgeeIcuHeader : props.originalName;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell className="text-left">Specifier</TableHeadCell>
          <TableHeadCell className="text-left">ICU type</TableHeadCell>
          <TableHeadCell className="text-left">Apple Example</TableHeadCell>
          <TableHeadCell className="text-left">Converted to ICU</TableHeadCell>
          <TableHeadCell className="text-left">Note</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={clsx()}>{row.specifier}</TableCell>
            <TableCell className={clsx()}>{row.icuType}</TableCell>
            <TableCell className={clsx()}>{row.example}</TableCell>
            <TableCell className={clsx('whitespace-nowrap')}>
              {row.exampleConverted}
            </TableCell>
            <TableCell className={clsx('text-left')}>{row.note}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
