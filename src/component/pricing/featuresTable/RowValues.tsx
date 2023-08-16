import clsx from 'clsx';
import React from 'react';
import { Ready } from '../progressSymbols/Ready';
import { InDevelopment } from '../progressSymbols/InDevelopment';

type LiteralUnion<LiteralType extends BaseType, BaseType> =
  | LiteralType
  | (BaseType & { _?: never });

export type ProgressSymbol = LiteralUnion<'y' | 'd' | 'n', React.ReactNode>;

export type PlanRows = (number | null)[];

type Props = {
  planRows: PlanRows;
  items?: ProgressSymbol[];
};

export const RowValues = ({ planRows, items }: Props) => {
  return (
    <>
      {planRows.map((val, i) => {
        if (val === null) {
          return (
            <div key={i} className="pricing__features-table-grid--separator" />
          );
        } else {
          const content = items?.[val];
          return (
            <div
              key={i}
              className={clsx('pricing__features-table-grid--item-mark')}
            >
              {content === 'y' ? (
                <Ready />
              ) : content === 'd' ? (
                <InDevelopment />
              ) : content === 'n' ? null : (
                content
              )}
            </div>
          );
        }
      })}
    </>
  );
};
