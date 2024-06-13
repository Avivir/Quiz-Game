import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameSetup from "./Components/GameSetup/GameSetup";
import Game from "./Components/Game/Game";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
      <Router>
        <Routes>
          <Route path="/game" Component={GameSetup} />
          <Route path="/" Component={Game} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
