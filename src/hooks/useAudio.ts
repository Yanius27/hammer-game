import { useEffect, useRef } from 'react';

import { GameStatus } from '@/types/game';

import backgroundMusic from '/sounds/funky_town.mp3';

/**
 * Хук для настройки воспроизведения аудио
 *
 * @param status - Общий статус игры (воспроизведение аудио происходит только при статусе PLAYING)
 *
 * @example
 * useAudio(GameStatus.Playing);
 */

export const useAudio = (status: GameStatus) => {
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!bgMusicRef.current) {
      bgMusicRef.current = new Audio(backgroundMusic);
      bgMusicRef.current.loop = true;
      bgMusicRef.current.volume = 0.1;
    }

    if (status === GameStatus.PLAYING) {
      bgMusicRef.current.play();
    } else {
      bgMusicRef.current.pause();
    }

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
      }
    };
  }, [status]);
};
