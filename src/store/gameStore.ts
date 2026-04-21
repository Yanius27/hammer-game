import { GameStatus, type HitResult } from "@/types/game";
import { getResult } from "@/utils/getResult";
import { create } from "zustand";

type GameStore = {
  status: GameStatus,
  power: number,
  result: HitResult | null,

  setPower: (v: number) => void,
  startGame: () => void,
  hit: () => void,
  reset: () => void
}

export const useGameStore = create<GameStore>((set, get) => ({
  status: GameStatus.IDLE,
  power: 0,
  result: null,

  setPower: (value) => set({ power: value }),

  startGame: () => set({
    status: GameStatus.PLAYING,
    power: 0,
    result: null
  }),

  hit: () => {
    const power = get().power;
    const result = getResult(power);

    set({
      status: GameStatus.RESULT,
      result
    });
  },

  reset: () => {
    set({
      status: GameStatus.IDLE,
      power: 0,
      result: null
    });
  }
}));
