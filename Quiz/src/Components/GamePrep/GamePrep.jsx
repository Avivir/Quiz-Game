import Stepper from "../Stepper/Stepper";
import "./GamePrep.css";

export default function GamePrep() {
  return (
    <div className="flex justify-center ">
      <div id="game-prep-container">
        <Stepper
          steps={["choose game mode", "choose category", "choose dificulty"]}
        />
      </div>
    </div>
  );
}
