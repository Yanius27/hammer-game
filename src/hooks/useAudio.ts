import { useEffect, useRef, useState } from 'react';

import { GameStatus } from '@/types/game';

import backgroundMusic from '/sounds/ui-i-a-i-i_cat.mp3';

let audioInstance: HTMLAudioElement | null = null;

/**
 * Хук для настройки воспроизведения аудио
 *
 * @param status - Общий статус игры (воспроизведение аудио происходит только при статусе PLAYING)
 *
 * @returns Объект с состоянием воспроизведения аудио и функцией для изменения этого состояния
 * @property {boolean} isMuted - Флаг, указывающий, включен ли звук в данный момент
 * @property {() => void} toggleMute - Функция для включения/выключения звука
 *
 * @example
 * const {isMuted, toggleMute } = useAudio(GameStatus.Playing);
 */

export const useAudio = (status: GameStatus) => {
  const bgMusicRef = useRef<HTMLAudioElement | null>(audioInstance);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!bgMusicRef.current) {
      bgMusicRef.current = new Audio(backgroundMusic);
      audioInstance = bgMusicRef.current;
      bgMusicRef.current.loop = true;
      bgMusicRef.current.volume = 0.1;
    }

    if (status !== GameStatus.IDLE) {
      if (bgMusicRef.current.paused) {
        bgMusicRef.current.play().catch((err) => {
          console.debug('Audio play failed:', err);
        });
      }
    } else {
      bgMusicRef.current.pause();
    }

    return () => {
      if (bgMusicRef.current && status === GameStatus.IDLE) {
        bgMusicRef.current.pause();
      }
    };
  }, [status]);

  const toggleMute = () => {
    if (!bgMusicRef.current || status === GameStatus.IDLE) {
      return;
    }

    if (isMuted) {
      bgMusicRef.current.volume = 0.1;
    } else {
      bgMusicRef.current.volume = 0;
    }

    setIsMuted(!isMuted);
  };

  return { isMuted, toggleMute };
};
