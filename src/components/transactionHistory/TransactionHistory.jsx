import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeadRow}>
          <th className={styles.tableHeadBlock}>Type</th>
          <th className={styles.tableHeadBlock}>Amount</th>
          <th className={styles.tableHeadBlock}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.tableBodyRow} key={id}>
              <td className={styles.tableBlock}>{type}</td>
              <td className={styles.tableBlock}>{amount}</td>
              <td className={styles.tableBlock}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
