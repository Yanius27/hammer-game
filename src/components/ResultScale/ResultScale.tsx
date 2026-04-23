import { useGameStore } from '@/store/gameStore';
import Prize from '../Prize/Prize';
import { HitResult } from '@/types/game';

import styles from './ResultScale.module.css';
import ResultScaleLevels from './ResultScaleLevels';

export default function ResultScale() {
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
