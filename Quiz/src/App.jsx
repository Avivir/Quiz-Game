import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameSetup from "./Components/GameSetup/GameSetup";
import Game from "./Components/Game/Game";
import Index from "./Components/Index/Index.jsx";
import { TimeProvider } from "./CustomHooks/TimeContext.jsx";
import Scoreboard from "./Components/Scoreboard/Scoreboard.jsx";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
      <Router>
        <Routes>
          <Route path="/setup" element={<GameSetup />} />
          <Route path="/index" element={<Index />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route
            path="/game"
            element={
              <TimeProvider>
                <Game />
              </TimeProvider>
            }
          />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
