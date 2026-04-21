import styles from "./ActionButton.module.css";

type TActionButtonProps = {
  onClick: () => void,
  className: string,
  label: string
}

export default function ActionButton({ onClick, className, label }: TActionButtonProps) {
  return (
    <button onClick={onClick} className={`${styles["action-button"]} ${styles[className]}`}>
      {label}
    </button>
  )
}

