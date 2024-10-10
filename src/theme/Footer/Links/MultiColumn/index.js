import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import styles from '../../styles.module.css';

function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      className={styles.footerItem}
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className={styles.footerItem}>
      <LinkItem item={item} />
    </li>
  );
}

function Column({ column }) {
  return (
    <div className={`col ${styles.footerCol}`}>
      <div className={styles.footerTitle}>{column.title}</div>
      <ul className={styles.footerItems}>
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className={`row ${styles.footerLinks}`}>
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
