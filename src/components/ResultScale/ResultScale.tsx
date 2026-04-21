
import resultScale from "@/assets/images/measure_main.png";

import styles from "./ResultScale.module.css";

export default function ResultScale() {
  return (
    <div className={styles["result-scale"]}>
      <img src={resultScale} alt="Result scale" />
    </div>
  )
}
