import { GameStatus, HitPhase, type HitResult } from '@/types/game';
import { getResult } from '@/utils/getResult';
import { create } from 'zustand';

type GameStore = {
  status: GameStatus;
  hitPhase: HitPhase;
  power: number;
  result: HitResult | null;

  setPower: (v: number | ((prev: number) => number)) => void;
  startGame: () => void;
  hit: () => void;
  reset: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  status: GameStatus.IDLE,
  hitPhase: HitPhase.IDLE,
  power: 0,
  result: null,

  setPower: (value) =>
    set((state) => ({
      power: typeof value === 'function' ? value(state.power) : value,
    })),

  startGame: () =>
    set({
      status: GameStatus.PLAYING,
      hitPhase: HitPhase.PLAYING,
      power: 0,
      result: null,
    }),

  hit: () => {
    set({ hitPhase: HitPhase.WINDUP });

    setTimeout(() => {
      const power = get().power;
      const result = getResult(power);

      set({
        status: GameStatus.RESULT,
        hitPhase: HitPhase.RESOLVE,
        result,
      });
    }, 1500);
  },

  reset: () => {
    set({
      status: GameStatus.IDLE,
      power: 0,
      result: null,
    });
  },
}));
