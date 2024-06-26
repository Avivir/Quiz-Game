import { ConfigProvider } from "antd";
import "./App.css";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom";
import GameSetup from "./Components/GameSetup/GameSetup";
import Game from "./Components/Game/Game";
import { TimeProvider } from "./CustomHooks/TimeContext.jsx";
import {QuestionsProvider} from "./CustomHooks/QuestionsContext.jsx";
import Scoreboard from "./Components/Scoreboard/Scoreboard.jsx";
import Index from "./Components/Index/Index.jsx";

function App() {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
            <Router>
                <Routes>
                    <Route path="/">
                    <Route path="/" element={<Index />} />
                    <Route path="/scoreboard" element={<Scoreboard />} />
                    <Route
                        path="/setup"
                        element={
                            <QuestionsProvider>
                                <GameSetup />
                            </QuestionsProvider>
                        }
                    />
                    <Route
                        path="/game"
                        element={
                            <QuestionsProvider>
                                <TimeProvider>
                                    <Game />
                                </TimeProvider>
                            </QuestionsProvider>
                        }
                    />
                    </Route>
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
