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

export const HitPhase = {
  IDLE: 'IDLE',
  WINDUP: 'WINDUP',
  HIT: 'HIT',
  RESOLVE: 'RESOLVE',
}

export type GameStatus = typeof GameStatus[keyof typeof GameStatus];
export type HitResult = typeof HitResult[keyof typeof HitResult];
export type HitPhase = typeof HitPhase[keyof typeof HitPhase];
