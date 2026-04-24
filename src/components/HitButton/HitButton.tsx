import { ANIMATION_BUTTON_PRESS, ANIMATION_BUTTON_SHAKE } from '@/constants/game';
import { HitPhase } from '@/types/game';

import styles from './HitButton.module.css';

type THitButton = {
  phase: HitPhase;
};

export function HitButton({ phase }: THitButton) {
  const getAnimationVariable = () => {
    switch (phase) {
      case HitPhase.WINDUP:
        return { '--animation-duration': `${ANIMATION_BUTTON_PRESS}ms` };
      case HitPhase.RESOLVE:
        return { '--animation-duration': `${ANIMATION_BUTTON_SHAKE}ms` };
      default:
        return {};
    }
  };
  return (
    <div
      className={`${styles['hit-button']} ${styles[phase]}`}
      style={getAnimationVariable() as React.CSSProperties}
    />
  );
}
