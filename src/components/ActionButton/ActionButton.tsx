import { useGameStore } from "@/store/gameStore";
import styles from "./ActionButton.module.css";
import { GameStatus } from "@/types/game";

export default function ActionButton() {
  const { status } = useGameStore();

  return (
    <button className={styles["action-button"]}>
      {status === GameStatus.IDLE && 'УДАР!'}
    </button>
  )
}

