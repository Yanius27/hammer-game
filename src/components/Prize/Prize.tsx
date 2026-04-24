import styles from './Prize.module.css';

export function Prize({ isPerfect }: { isPerfect: boolean }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.cont} ${isPerfect ? styles.perfect : styles.ordinary}`} />
    </div>
  );
}
