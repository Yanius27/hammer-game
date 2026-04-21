import { useGameStore } from "@/store/gameStore";
import ActionButton from "../ActionButton/ActionButton";
import HitButton from "../HitButton/HitButton";
import ResultScale from "../ResultScale/ResultScale";
import GameLayout from "./GameLayout";
import { GameStatus } from "@/types/game";
import { useGameView } from "@/hooks/useGameView";
import { usePowerAnimation } from "@/hooks/usePowerAnimation";
import MessageBlock from "../MessageBlock/MessageBlock";
import Hammer from "../Hammer/Hammer";

import styles from "./Game.module.css";
import PowerBar from "../PowerBar/PowerBar";
import RobotoAssistant from "../RobotoAssistant/RobotoAssistant";

export default function Game() {
  const { status, power, hitPhase, result, setPower, startGame, hit } = useGameStore();
  const { buttonText, message } = useGameView(status, result);

  const isPlaying = status === GameStatus.PLAYING;

  usePowerAnimation({ status, power, setPower });

  const handleClick = () => {
    switch (status) {
      case GameStatus.IDLE:
        startGame();
        break;
      case GameStatus.PLAYING:
        hit();
        break;
      case GameStatus.RESULT:
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
          <PowerBar />
        </div>

        <div className={styles.center}>
          <MessageBlock text={message} />
          <ActionButton 
            onClick={handleClick} 
            className={isPlaying ? "hit" : "default"}
            label={buttonText}
          />
        </div>

        <div className={styles.right}>
          <RobotoAssistant result={result} />
        </div>
      </div>

    </GameLayout>
  )
}
