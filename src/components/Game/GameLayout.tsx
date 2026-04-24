import type React from 'react';

import styles from './Game.module.css';

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>;
}
