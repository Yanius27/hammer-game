import styles from './ActionButton.module.css';

type TActionButtonClass = 'hit' | 'default';

type TActionButtonProps = {
  onClick: () => void;
  className: TActionButtonClass;
  label: string;
};

export function ActionButton({ onClick, className, label }: TActionButtonProps) {
  return (
    <button onClick={onClick} className={`${styles['action-button']} ${styles[className]}`}>
      {label}
    </button>
  );
}
