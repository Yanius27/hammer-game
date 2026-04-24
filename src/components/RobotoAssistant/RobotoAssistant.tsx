import { ROBOTO_BY_RESULT } from './RobotoAssistant.config';
import type { HitResult } from '@/types/game';

import styles from './RobotoAssistant.module.css';

type TRobotoAssistant = {
  result: HitResult | null;
};

export function RobotoAssistant({ result }: TRobotoAssistant) {
  const imageSrc = result ? ROBOTO_BY_RESULT[result] : ROBOTO_BY_RESULT.LOW;

  return (
    <div className={styles['roboto-assistant']}>
      <img src={imageSrc} alt="Roboto img" />
    </div>
  );
}
