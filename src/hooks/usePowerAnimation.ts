import { useEffect, useRef } from 'react';

import { INTERVAL, MAX_POWER, MIN_POWER } from '@/constants/game';
import { GameStatus, HitPhase } from '@/types/game';

type Params = {
  status: GameStatus;
  hitPhase: HitPhase;
  setPower: (v: number | ((prev: number) => number)) => void;
};

export const usePowerAnimation = ({ status, hitPhase, setPower }: Params) => {
  const directionRef = useRef(1);

  useEffect(() => {
    if (status !== GameStatus.PLAYING || hitPhase === HitPhase.RESOLVE) {
      return;
    }

    const interval = setInterval(() => {
      setPower((prev) => {
        const next = prev + directionRef.current * 2;

        if (next >= MAX_POWER) {
          directionRef.current = -1;
        }

        if (next <= MIN_POWER) {
          directionRef.current = 1;
        }

        return next;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [status, hitPhase, setPower]);
};
