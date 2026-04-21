export const GameStatus = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  RESULT: 'RESULT'
} as const;

export const HitResult = {
  MISS: 'MISS',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  PERFECT: 'PERFECT'
} as const

export type GameStatus = typeof GameStatus[keyof typeof GameStatus];
export type HitResult = typeof HitResult[keyof typeof HitResult];
