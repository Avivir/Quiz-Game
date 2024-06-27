import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameSetup from "./Components/GameSetup/GameSetup";
import Game from "./Components/Game/Game";
import { TimeProvider } from "./CustomHooks/TimeContext.jsx";
import { QuestionsProvider } from "./CustomHooks/QuestionsContext.jsx";
import Scoreboard from "./Components/Scoreboard/Scoreboard.jsx";
import Index from "./Components/Index/Index.jsx";
import { GameInformationProvider } from "./CustomHooks/GameInformation.jsx";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
      <Router>
        <GameInformationProvider>
          <QuestionsProvider>
            <TimeProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/scoreboard" element={<Scoreboard />} />
                <Route path="/setup" element={<GameSetup />} />
                <Route path="/game" element={<Game />} />
              </Routes>
            </TimeProvider>
          </QuestionsProvider>
        </GameInformationProvider>
      </Router>
    </ConfigProvider>
  );
}

export default App;
