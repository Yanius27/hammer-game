import styles from './MessageBlock.module.css';

export default function MessageBlock({ text }: { text: string }) {
  return <p className={styles['message-block']}>{text}</p>;
}
