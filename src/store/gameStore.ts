import { create } from 'zustand';

import { ANIMATION_HAMMER_WINDUP } from '@/constants/game';
import { GameStatus, HitPhase, type HitResult } from '@/types/game';
import { getResult } from '@/utils/getResult';

type GameStore = {
  status: GameStatus;
  hitPhase: HitPhase;
  power: number;
  result: HitResult | null;
  timeoutId: number | null;

  setPower: (v: number | ((prev: number) => number)) => void;
  startGame: () => void;
  hit: () => void;
  reset: () => void;
  clearHitTimeout: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  status: GameStatus.IDLE,
  hitPhase: HitPhase.IDLE,
  power: 0,
  result: null,
  timeoutId: null,

  clearHitTimeout: () => {
    const { timeoutId } = get();
    if (timeoutId) {
      clearTimeout(timeoutId);
      set({ timeoutId: null });
    }
  },

  setPower: (value) =>
    set((state) => ({
      power: typeof value === 'function' ? value(state.power) : value,
    })),

  startGame: () => {
    get().clearHitTimeout();

    set({
      status: GameStatus.PLAYING,
      hitPhase: HitPhase.PLAYING,
      power: 0,
      result: null,
      timeoutId: null,
    });
  },

  hit: () => {
    const { status, hitPhase, timeoutId } = get();

    if (status !== GameStatus.PLAYING || timeoutId || hitPhase === HitPhase.WINDUP) {
      return;
    }

    get().clearHitTimeout();

    set({ hitPhase: HitPhase.WINDUP });

    const newTimeoutId = window.setTimeout(() => {
      const power = get().power;
      const result = getResult(power);

      set({
        status: GameStatus.RESULT,
        hitPhase: HitPhase.RESOLVE,
        result,
        timeoutId: null,
      });
    }, ANIMATION_HAMMER_WINDUP);

    set({ timeoutId: newTimeoutId });
  },

  reset: () => {
    get().clearHitTimeout();

    set({
      status: GameStatus.IDLE,
      hitPhase: HitPhase.IDLE,
      power: 0,
      result: null,
      timeoutId: null,
    });
  },
}));
