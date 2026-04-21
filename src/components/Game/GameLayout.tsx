import type { ReactNode } from 'react';

import gameBg from '@/assets/images/bg_top.png';

import styles from "./Game.module.css";

interface IGameLayoutProps {
  children: ReactNode
}

export default function GameLayout({ children }: IGameLayoutProps) {
  return (
    <div className={styles.game}>
      <img className={styles.bg} src={gameBg} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

