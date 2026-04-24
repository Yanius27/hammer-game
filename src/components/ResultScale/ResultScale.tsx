import Prize from '@/components/Prize';
import ResultScaleLevels from './ResultScaleLevels';
import { useGameStore } from '@/store/gameStore';
import { HitResult } from '@/types/game';

import styles from './ResultScale.module.css';

export function ResultScale() {
  const { power, hitPhase, result } = useGameStore();

  const isPerfect = result === HitResult.PERFECT;

  return (
    <div className={styles['result-scale']}>
      {isPerfect && <div className={styles.glow} />}
      <Prize isPerfect={isPerfect} />

      <ResultScaleLevels power={power} hitPhase={hitPhase} />
    </div>
  );
}
