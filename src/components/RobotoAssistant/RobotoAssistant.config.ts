import defaulRoboto from "@/assets/images/robot_1.png";
import smiledRoboto from "@/assets/images/robot_2.png";
import happyRoboto from "@/assets/images/robot_3.png";

import type { HitResult } from "@/types/game";

export const ROBOTO_BY_RESULT: Record<HitResult, string> = {
  MISS: defaulRoboto,
  LOW: defaulRoboto,
  MEDIUM: smiledRoboto,
  HIGH: smiledRoboto,
  PERFECT: happyRoboto
}
