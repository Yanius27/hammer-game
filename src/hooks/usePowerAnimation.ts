import { useEffect, useRef } from "react";

import { INTERVAL, MAX_POWER, MIN_POWER } from "@/constants/game";
import { GameStatus } from "@/types/game"

type Params = {
  status: GameStatus,
  setPower: (value: number) => void
}

export const usePowerAnimation = ({ status, setPower }: Params) => {
  const directionRef = useRef(1);

  useEffect(() => {
    if (status !== GameStatus.PLAYING) {
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

        return Math.max(0, Math.min(100, next));
      })
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [status, setPower]);
};
