import { UI_TEXT } from "@/constants/ui";
import { GameStatus, HitResult } from "@/types/game";

export const useGameView = (status: GameStatus, result: HitResult | null) => {
  switch (status) {
    case GameStatus.IDLE:
      return {
        buttonText: UI_TEXT.startLabel,
        message: UI_TEXT.startMessage
      };
      case GameStatus.PLAYING:
        return {
          buttonText: UI_TEXT.hitLabel,
          message: UI_TEXT.instructionsMessage
        };
      case GameStatus.RESULT:
        if (!result) {
          return {
            buttonText: '',
            message: ''
          }
        }
        return {
          buttonText: UI_TEXT.startLabel,
          message: UI_TEXT.result[result]
        };
      default:
        return {
          buttonText: '',
          message: ''
        }
  }
};
