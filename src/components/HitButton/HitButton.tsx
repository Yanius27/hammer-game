import type { HitPhase } from "@/types/game";

import styles from "./HitButton.module.css";

type THitButton = {
  phase: HitPhase,
}

export default function HitButton({ phase }: THitButton) {
  return (
    <div className={`${styles["hit-button"]} ${styles[phase]}`}>

    </div>
  )
}
