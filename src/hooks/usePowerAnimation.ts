import { useEffect, useRef } from 'react';

import { INTERVAL, MAX_POWER, MIN_POWER } from '@/constants/game';
import { GameStatus, HitPhase } from '@/types/game';

type Params = {
  status: GameStatus;
  hitPhase: HitPhase;
  setPower: (v: number | ((prev: number) => number)) => void;
};

/**
 * Хук для анимации шкалы силы удара (PowerBar)
 * Реализует зацикленное движение индикатора вверх-вниз от MIN_POWER до MAX_POWER
 *
 * @param status - Общий статус игры (анимация происходит только при статусе PLAYING)
 * @param hitPhase - текущая фаза удара (анимация останавливается в фазе RESOLVE)
 * @param setPower - Функция для обновления текущего положения индикатора в store
 *
 * @example
 * const { buttonText, message } = usePowerAnimation(GameStatus.PLAYING, HitPhase.PLAYING, setPower);
 */

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
