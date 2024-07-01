import Header from "../Header/Header";
import { Button } from "antd";
import { Link } from "react-router-dom";
import gameImage from "../../assets/Game.jpg";
import scoreboardImage from "../../assets/scoreBoard.jpg";

export default function Index() {
  return (
    <>
      <Header />
      <div className="flex flex-row h-auto justify-center space-x-10">
        <div>
          <Link to="/setup">
            <p className="flex h-auto justify-center mb-5">Start new game</p>
            <Button
              className="w-96 h-96"
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
            ></Button>
          </Link>
        </div>
        <div>
          <Link to="/scoreboard">
            <p className="flex h-auto justify-center mb-5">Scoreboard</p>
            <Button
              className="w-96 h-96"
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
            ></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
