import { ROBOTO_BY_RESULT } from "./RobotoAssistant.config";
import styles from "./RobotoAssistant.module.css";
import type { HitResult } from "@/types/game";

type TRobotoAssiatant = {
  result: HitResult | null,
}

export default function RobotoAssistant({ result }: TRobotoAssiatant) {
  const imageSrc = result ? ROBOTO_BY_RESULT[result] : ROBOTO_BY_RESULT.LOW; 

  return (
    <div className={styles['roboto-assistant']}>
      <img src={imageSrc} alt="Roboto img" />
    </div>
  )
}
