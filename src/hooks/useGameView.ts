import { UI_TEXT } from '@/constants/ui';
import { HitPhase, HitResult } from '@/types/game';

export const useGameView = (phase: HitPhase, result: HitResult | null) => {
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
    case HitPhase.WINDUP:
      return {
        buttonText: '',
        message: '',
      };
    case HitPhase.RESOLVE:
      if (!result) {
        return {
          buttonText: '',
          message: '',
        };
      }
      return {
        buttonText: UI_TEXT.startLabel,
        message: UI_TEXT.result[result],
      };
    default:
      return {
        buttonText: '',
        message: '',
      };
  }
};
