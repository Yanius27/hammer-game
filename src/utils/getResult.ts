import { HIGH_ZONE, LOW_ZONE, MEDIUM_ZONE, PERFECT_ZONE } from "@/constants/game";
import { HitResult } from "@/types/game";

export const getResult = (power: number) => {
  if (power >= PERFECT_ZONE) return HitResult.PERFECT;
  if (power >= HIGH_ZONE) return HitResult.HIGH;
  if (power >= MEDIUM_ZONE) return HitResult.MEDIUM;
  if (power >= LOW_ZONE) return HitResult.LOW;
  return HitResult.MISS;
};
