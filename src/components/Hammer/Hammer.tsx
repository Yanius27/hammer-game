import { ANIMATION_HAMMER_READY, ANIMATION_HAMMER_WINDUP } from '@/constants/game';
import { HitPhase } from '@/types/game';
import hammerImg from '@/assets/images/Hammer.svg';

import styles from './Hammer.module.css';

type THammerProps = {
  phase: HitPhase;
};

export function Hammer({ phase }: THammerProps) {
  const getAnimationVariable = () => {
    switch (phase) {
      case HitPhase.WINDUP:
        return { '--animation-duration': `${ANIMATION_HAMMER_WINDUP}ms` };
      case HitPhase.PLAYING:
        return { '--animation-duration': `${ANIMATION_HAMMER_READY}ms` };
      default:
        return {};
    }
  };

  return (
    <div
      className={`${styles.Hammer} ${styles[phase]}`}
      style={getAnimationVariable() as React.CSSProperties}
    >
      <img src={hammerImg} alt="Hammer img" />
    </div>
  );
}
