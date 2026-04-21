import ActionButton from "../ActionButton/ActionButton";
import HitButton from "../HitButton/HitButton";
import ResultScale from "../ResultScale/ResultScale";
import GameLayout from "./GameLayout";

export default function Game() {
  return (
    <GameLayout>
      <ResultScale />
      <HitButton />
      <ActionButton />
    </GameLayout>
  )
}
