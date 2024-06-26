import { useState } from "react";
import Header from "../Header/Header";
import ScoreItem from "../ScoreItem/ScoreItem";
import "./Scoreboard.css";
import { data } from "../../Models/playersScores";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Scoreboard() {
  const { scoreItems } = data;

  const [minLimit, setMinLimit] = useState(0);
  const [limit, setLimit] = useState(scoreItems.length);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-2/3 flex-col">
        <div className="w-3/4 border-8 rounded-sm flex ">
          <div className="w-full h-full text overflow-auto">
            {scoreItems.slice(minLimit, limit).map((item, index) => (
              <ScoreItem
                key={index}
                number={item.number}
                playerName={item.playerName}
                gameName={item.gameName}
                score={item.score}
              />
            ))}
          </div>
        </div>
        <Link to="/index">
          <Button className="mt-5">Back to main menu</Button>
        </Link>
      </div>
    </>
  );
}
