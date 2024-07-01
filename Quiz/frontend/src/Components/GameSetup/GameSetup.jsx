import Header from "../Header/Header";
import { StepProvider } from "../../CustomHooks/StepContext";
import GamePrep from "../GamePrep/GamePrep";

export default function GameSetup() {
  return (
    <>
      <Header />
      <StepProvider>
        <GamePrep />
      </StepProvider>
    </>
  );
}
