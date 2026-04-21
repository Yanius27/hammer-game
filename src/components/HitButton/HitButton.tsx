import hitButtonInactive from "@/assets/images/button.png";
// import hitButtonActive from "@/assets/images/button_active.png";

import styles from "./HitButton.module.css";

export default function HitButton() {
  return (
    <div className={styles["hit-button"]}>
      <img src={hitButtonInactive} alt="Hit button" />
    </div>
  )
}
