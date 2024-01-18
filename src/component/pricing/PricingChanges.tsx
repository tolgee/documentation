import React, { FC, ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '../table/Table';
import clsx from 'clsx';

export type PricingChangesData = [
  {
    item: ReactNode;
    isNumber?: boolean;
    oldValue: ReactNode;
    newValue: ReactNode;
  }
];

export const PricingChanges: FC<{ data: PricingChangesData }> = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Old</TableHeadCell>
          <TableHeadCell>New</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={clsx('max-w-[400px]')}>{row.item}</TableCell>
            <TableCell className={clsx('text-center', 'px-10')}>
              {row.oldValue}
            </TableCell>
            <TableCell className={clsx('text-center', 'px-10', 'font-bold')}>
              {row.newValue}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
