import { HitPhase } from '@/types/game';

import hammerImg from '@/assets/images/Hammer.svg';

import styles from './Hammer.module.css';

type THammerProps = {
  phase: HitPhase;
};

export default function Hammer({ phase }: THammerProps) {
  return (
    <div className={`${styles.Hammer} ${styles[phase]}`}>
      <img src={hammerImg} alt="Hammer img" />
    </div>
  );
}
