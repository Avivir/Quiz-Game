import "./App.css";
import GamePrep from "./Components/GamePrep/GamePrep";
import Header from "./Components/Header/Header";
import { StepProvider } from "./CustomHooks/StepContext";
function App() {
  return (
    <div>
      <Header />
      <StepProvider>
        <GamePrep />
      </StepProvider>
    </div>
  );
}

export default App;
