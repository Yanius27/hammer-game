import { useEffect, useRef } from "react";

import { INTERVAL, MAX_POWER, MIN_POWER } from "@/constants/game";
import { GameStatus } from "@/types/game"

type Params = {
  status: GameStatus,
  power: number,
  setPower: (value: number) => void
}

export const usePowerAnimation = ({ status, power, setPower }: Params) => {
  const directionRef = useRef(1);

  useEffect(() => {
    if (status !== GameStatus.PLAYING) {
      return;
    }

    const interval = setInterval(() => {
      const next = power + directionRef.current * 2;

      if (next >= MAX_POWER) {
        directionRef.current = -1;
      }

      if (next <= MIN_POWER) {
        directionRef.current = 1;
      }

      setPower(next);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [status, power, setPower]);
};
