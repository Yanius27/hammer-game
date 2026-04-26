import type { GameStatus } from '@/types/game';

import { useAudio } from '@/hooks/useAudio';

import styles from './AudioToggleButton.module.css';

type TAudioToggleButtonProps = {
  status: GameStatus;
};

export function AudioToggleButton({ status }: TAudioToggleButtonProps) {
  const { isMuted, toggleMute } = useAudio(status);

  return (
    <button
      onClick={toggleMute}
      className={`${styles['audio-toggle']} ${isMuted ? styles.muted : styles.unmuted}`}
    />
  );
}
