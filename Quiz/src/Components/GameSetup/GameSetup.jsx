import Header from "../Header/Header";
import { GameInforamtionProvider } from "../../CustomHooks/GameInformation";
import { StepProvider } from "../../CustomHooks/StepContext";
import GamePrep from "../GamePrep/GamePrep";

export default function GameSetup() {
  return (
    <>
      <Header />
      <GameInforamtionProvider>
        <StepProvider>
          <GamePrep />
        </StepProvider>
      </GameInforamtionProvider>
    </>
  );
}
