import { HitPhase } from '@/types/game';
import { TRANSITION_SCALE } from '@/constants/game';

import styles from './ResultScale.module.css';

type TResultScaleLevelsProps = {
  power: number;
  hitPhase: HitPhase;
};

export default function ResultScaleLevels({ power, hitPhase }: TResultScaleLevelsProps) {
  const isResolve = hitPhase === HitPhase.RESOLVE;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.levels}
        style={
          {
            height: isResolve ? `${100 - power}%` : '100%',
            '--transition-duration': `${TRANSITION_SCALE}ms`,
          } as React.CSSProperties
        }
      />
      <div className={styles.fill} />
    </div>
  );
}
