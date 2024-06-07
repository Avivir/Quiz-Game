import "./App.css";
import GamePrep from "./Components/GamePrep/GamePrep";
import Header from "./Components/Header/Header";
import { GameInforamtionProvider } from "./CustomHooks/GameInformation";
import { StepProvider } from "./CustomHooks/StepContext";
function App() {
  return (
    <div>
      <Header />
      <GameInforamtionProvider>
        <StepProvider>
          <GamePrep />
        </StepProvider>
      </GameInforamtionProvider>
    </div>
  );
}

export default App;
