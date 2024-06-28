import PlayerName from "../PlayerName/PlayerName";
import Stepper from "../Stepper/Stepper";
import { useStepContext } from "../../CustomHooks/StepContext";
import "./GamePrep.css";
import GameMode from "../GameMode/GameMode";
import Categories from "../Categories/Categories";
import DifficultyLevel from "../DifficultyLevel/DifficultyLevel";

export default function GamePrep() {
  const { step } = useStepContext();

  let content;
  switch (step) {
    case 0:
      content = <PlayerName />;
      break;
    case 1:
      content = <GameMode />;
      break;
    case 2:
      content = <Categories />;
      break;
    case 3:
      content = <DifficultyLevel />;
      break;
  }

  return (
    <div className="flex justify-center h-auto">
      <div id="game-prep-container">
        <Stepper
          steps={[
            "Enter your name",
            "select amount of questions",
            "choose category",
            "choose dificulty",
          ]}
        />
        {content}
      </div>
    </div>
  );
}
