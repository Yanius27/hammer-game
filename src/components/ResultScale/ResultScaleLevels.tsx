import { HitPhase } from '@/types/game';

import styles from './ResultScale.module.css';

type TResultScaleLevelsProps = {
  power: number;
  hitPhase: HitPhase;
};

export default function ResultScaleLevels({ power, hitPhase }: TResultScaleLevelsProps) {
  const isResolve = hitPhase === HitPhase.RESOLVE;

  return (
    <div className={styles.wrapper}>
      <div className={styles.levels} style={{ height: isResolve ? `${100 - power}%` : '100%' }} />
      <div className={styles.fill} />
    </div>
  );
}
