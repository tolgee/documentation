import clsx from 'clsx';
import React from 'react';
import { ProgressSymbol, RowValues } from './RowValues';

export type FeaturesTableItem =
  | {
      type: 'item';
      label: string;
      items: ProgressSymbol[];
    }
  | { type: 'title'; label: string };

export type FeaturesTableProps = {
  plans: string[];
  items: FeaturesTableItem[];
};

export const FeaturesTable = ({ plans, items }: FeaturesTableProps) => {
  const planRows = [...new Array(plans.length * 2 - 1)].map((_, i) =>
    i % 2 === 0 ? i / 2 : null
  );
  return (
    <div
      className="pricing__features-table-grid"
      style={{
        gridTemplateColumns: `2fr ${planRows
          .map((val) => (val === null ? '1px' : '1fr'))
          .join(' ')}`,
      }}
    >
      <div />
      {planRows.map((val, i) =>
        val === null ? (
          <div />
        ) : (
          <div key={i} className={clsx('pricing__features-table-grid--plan')}>
            {plans[val]}
          </div>
        )
      )}
      {items.map((item, i) => {
        if (item.type === 'item') {
          return (
            <div key={i} className={clsx('pricing__features-table-row')}>
              <div
                key={i}
                className={clsx('pricing__features-table-grid--item-label')}
              >
                {item.label}
              </div>
              <RowValues planRows={planRows} items={item.items} />
            </div>
          );
        } else if (item.type === 'title') {
          return (
            <React.Fragment key={i}>
              <div
                key={i}
                className={clsx('pricing__features-table-grid--item-title')}
              >
                {item.label}
              </div>
              <RowValues planRows={planRows} />
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};
