/**
 * Глобальный статус жизненого цикла игры
 */
export const GameStatus = {
  /** Начальное состояние */
  IDLE: 'IDLE',
  /** Процесс игры */
  PLAYING: 'PLAYING',
  /** Подведение итогов */
  RESULT: 'RESULT',
} as const;

/**
 * Результат игры в зависимости от силы удара
 */
export const HitResult = {
  /** Очень слабый удар */
  MISS: 'MISS',
  /** Слабый удар */
  LOW: 'LOW',
  /** Средний удар */
  MEDIUM: 'MEDIUM',
  /** Сильный удар */
  HIGH: 'HIGH',
  /** Очень сильный удар */
  PERFECT: 'PERFECT',
} as const;

/**
 * Фазы процесса удара молотом по кнопке. Нужны для работы с анимацией и некоторыми UI-элементами
 */
export const HitPhase = {
  /** Молот в состоянии покоя */
  IDLE: 'IDLE',
  /** Ожидание нажатия на кнопку 'Удар!' */
  PLAYING: 'PLAYING',
  /** Анимация замаха */
  WINDUP: 'WINDUP',
  /** Расчет и отображение результата */
  RESOLVE: 'RESOLVE',
} as const;

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus];
export type HitResult = (typeof HitResult)[keyof typeof HitResult];
export type HitPhase = (typeof HitPhase)[keyof typeof HitPhase];
