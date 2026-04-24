import styles from './MessageBlock.module.css';

export function MessageBlock({ text }: { text: string }) {
  // Не успел заменить dangerouslySetInnerHTML, но осознаю, что такой подход приемлем только с статичесикми данными
  return <p className={styles['message-block']} dangerouslySetInnerHTML={{ __html: text }} />;
}
