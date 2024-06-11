import { ConfigProvider } from "antd";
import "./App.css";
import GamePrep from "./Components/GamePrep/GamePrep";
import Header from "./Components/Header/Header";
import { GameInforamtionProvider } from "./CustomHooks/GameInformation";
import { StepProvider } from "./CustomHooks/StepContext";
function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
      <div>
        <Header />
        <GameInforamtionProvider>
          <StepProvider>
            <GamePrep />
          </StepProvider>
        </GameInforamtionProvider>
      </div>
    </ConfigProvider>
  );
}

export default App;
