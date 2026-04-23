import { UI_TEXT } from '@/constants/ui';
import { HitPhase, HitResult } from '@/types/game';

/**
 * Хук для преобразования внутреннего состояния игры в текстовые данные для UI
 * 
 * @param phase - текущая фаза удара (IDLE, PLAYING, WINDUP, RESOLVE)
 * @param result - иоговый результат удара ( MISS, LOW, MEDIUM, HIGH, PERFECT)
 * 
 * @returns Объект с текстом для кнопки и игровым сообщением.
 * 
 * @example 
 * const { buttonText, message } = useGameView(HitPhase.PLAYING, null);
 */

export const useGameView = (phase: HitPhase, result: HitResult | null) => {
  const defaultViews = {
    buttonText: '',
    message: '',
  };

  switch (phase) {
    case HitPhase.IDLE:
      return {
        buttonText: UI_TEXT.startLabel,
        message: UI_TEXT.startMessage,
      };
    case HitPhase.PLAYING:
      return {
        buttonText: UI_TEXT.playingLabel,
        message: UI_TEXT.playingMessage,
      };
    case HitPhase.RESOLVE:
      if (result) {
        return {
        buttonText: UI_TEXT.startLabel,
        message: UI_TEXT.result[result],
        };
      }
      return defaultViews;

    default:
      return defaultViews;
  }
};
