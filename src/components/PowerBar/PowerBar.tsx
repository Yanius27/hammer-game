import { MAX_POWER } from '@/constants/game';

import styles from './PowerBar.module.css';

export function PowerBar({ power }: { power: number }) {
  return (
    <div className={styles['power-bar']}>
      <div style={{ top: `${MAX_POWER - power - 2}%` }} className={styles.level}></div>
      <div className={styles.contents}>
        <div
          style={{ height: `${MAX_POWER - power}%` }}
          className={styles['contents-emptyness']}
        ></div>
        <div className={styles['contents-level']}></div>
      </div>
    </div>
  );
}
