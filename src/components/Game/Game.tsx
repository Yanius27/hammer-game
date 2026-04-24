import ActionButton from '@/components/ActionButton';
import HitButton from '@/components/HitButton';
import ResultScale from '@/components/ResultScale';
import GameLayout from './GameLayout';
import MessageBlock from '@/components/MessageBlock';
import Hammer from '@/components/Hammer';
import PowerBar from '@/components/PowerBar';
import RobotoAssistant from '@/components/RobotoAssistant';
import { GameStatus, HitPhase } from '@/types/game';
import { useGameView } from '@/hooks/useGameView';
import { usePowerAnimation } from '@/hooks/usePowerAnimation';
import { useGameStore } from '@/store/gameStore';
import { useAudio } from '@/hooks/useAudio';

import styles from './Game.module.css';

export default function Game() {
  const { status, power, hitPhase, result, setPower, startGame, reset, hit } = useGameStore();
  const { buttonText, message } = useGameView(hitPhase, result);
  useAudio(status);

  const isPlaying = status === GameStatus.PLAYING;
  const isWindUp = hitPhase === HitPhase.WINDUP;

  usePowerAnimation({ status, hitPhase, setPower });

  const handleClick = () => {
    switch (status) {
      case GameStatus.IDLE:
        startGame();
        break;
      case GameStatus.PLAYING:
        hit();
        break;
      case GameStatus.RESULT:
        reset();
        startGame();
        break;
    }
  };

  return (
    <GameLayout>
      <div className={styles.top}>
        <ResultScale />
      </div>

      <div className={styles.middle}>
        <Hammer phase={hitPhase} />
        <HitButton phase={hitPhase} />
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <PowerBar power={power} />
        </div>

        <div className={styles.center}>
          <div className={styles.wrapper}>
            <MessageBlock text={message} />
            {!isWindUp && (
              <ActionButton
                onClick={handleClick}
                className={isPlaying ? 'hit' : 'default'}
                label={buttonText}
              />
            )}
          </div>
        </div>

        <div className={styles.right}>
          <RobotoAssistant result={result} />
        </div>
      </div>
    </GameLayout>
  );
}
