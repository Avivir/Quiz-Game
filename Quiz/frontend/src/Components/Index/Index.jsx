import Header from "../Header/Header";
import { Button } from "antd";
import { Link } from "react-router-dom";
import gameImage from "../../assets/Game.jpg";
import scoreboardImage from "../../assets/scoreBoard.jpg";

export default function Index() {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-row w-full max-w-screen-xl mx-auto">
            <Link to="/setup" className="flex-1">
              <Button
                className="w-full h-2/3"
                style={{
                  backgroundImage: `url(${gameImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                Start new Game
              </Button>
            </Link>
            <Link to="/scoreboard" className="flex-1">
              <Button
                className="w-full h-2/3"
                style={{
                  backgroundImage: `url(${scoreboardImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                Scoreboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
