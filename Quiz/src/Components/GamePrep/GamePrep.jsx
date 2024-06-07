import PlayerName from "../PlayerName/PlayerName";
import Stepper from "../Stepper/Stepper";
import { useStepContext } from "../../CustomHooks/StepContext";
import "./GamePrep.css";
import GameMode from "../GameMode/GameMode";
import Categories from "../Categories/Categories";

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
      content = <h1>This is level 3</h1>;
      break;
  }

  return (
    <div className="flex justify-center ">
      <div id="game-prep-container">
        <Stepper
          steps={[
            "Enter your name",
            "choose game mode",
            "choose category",
            "choose dificulty",
          ]}
        />
        {content}
      </div>
    </div>
  );
}
