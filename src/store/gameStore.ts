import { GameStatus, HitPhase, type HitResult } from "@/types/game";
import { getResult } from "@/utils/getResult";
import { create } from "zustand";

type GameStore = {
  status: GameStatus,
  hitPhase: HitPhase,
  power: number,
  result: HitResult | null,

  setPower: (v: number) => void,
  startGame: () => void,
  hit: () => void,
  reset: () => void
}

export const useGameStore = create<GameStore>((set, get) => ({
  status: GameStatus.IDLE,
  hitPhase: HitPhase.IDLE,
  power: 0,
  result: null,

  setPower: (value) => set({ power: value }),

  startGame: () => set({
    status: GameStatus.PLAYING,
    power: 0,
    result: null
  }),

  hit: () => {
    set({ hitPhase: HitPhase.WINDUP });

    setTimeout(() => {
      set({ hitPhase: HitPhase.HIT });
    }, 500);

    setTimeout(() => {
      const power = get().power;
      const result = getResult(power);

      set({
        status: GameStatus.RESULT,
        hitPhase: HitPhase.RESOLVE,
        result
      });
    }, 200);
  },

  reset: () => {
    set({
      status: GameStatus.IDLE,
      power: 0,
      result: null
    });
  }
}));
