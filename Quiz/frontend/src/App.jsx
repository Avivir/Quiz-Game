import { ConfigProvider } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameSetup from "./Components/GameSetup/GameSetup";
import Game from "./Components/Game/Game";
import Index from "./Components/Index/Index.jsx";
import { TimeProvider } from "./CustomHooks/TimeContext.jsx";
import {QuestionsProvider} from "./CustomHooks/QuestionsContext.jsx";

function App() {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: "#45f321" } }}>
            <Router>
                <Routes>
                    <Route
                        path="/"
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
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
