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

export type PlaceholderConversionData = {
  specifier: ReactNode;
  icuType: ReactNode;
  example: ReactNode;
  exampleConverted: ReactNode;
  note?: ReactNode;
}[];

export const PlaceholderConversion: FC<{
  data: PlaceholderConversionData;
  specifiers?: boolean;
}> = (props) => {
  const { data, specifiers = true } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {specifiers ? (
            <TableHeadCell className="text-left">Specifier</TableHeadCell>
          ) : null}
          <TableHeadCell className="text-left">ICU type</TableHeadCell>
          <TableHeadCell className="text-left">Example</TableHeadCell>
          <TableHeadCell className="text-left">Converted to ICU</TableHeadCell>
          <TableHeadCell className="text-left">Note</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {specifiers ? (
              <TableCell className={clsx()}>{row.specifier}</TableCell>
            ) : null}
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
