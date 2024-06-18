import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameSetup from "./Components/GameSetup/GameSetup";
import Game from "./Components/Game/Game";
import { TimeProvider } from "./CustomHooks/TimeContext.jsx";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
      <Router>
        <Routes>
          <Route path="/game" element={<GameSetup />} />
          <Route
            path="/"
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
