import React, { FC, ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from './table/Table';
import clsx from 'clsx';

export type FieldsData = [
  {
    item: ReactNode;
    description: ReactNode;
  }
];

export const SsoFieldsTable: FC<{ data: FieldsData }> = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Property</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={clsx('max-w-[400px]')}>{row.item}</TableCell>

            <TableCell className={clsx('text-center', 'px-10')}>
              {row.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
