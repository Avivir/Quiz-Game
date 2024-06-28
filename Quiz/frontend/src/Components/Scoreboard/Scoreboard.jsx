import { useState } from "react";
import Header from "../Header/Header";
import ScoreItem from "../ScoreItem/ScoreItem";
import "./Scoreboard.css";
import { data } from "../../Models/playersScores";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { categories } from "../../Models/categoriesData.js";

export default function Scoreboard() {
  const [minLimit, setMinLimit] = useState(0);
  const [limit, setLimit] = useState(data.length);
  const [inputValue, setInputValue] = useState("");
  const [players, setPlayers] = useState(data);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (categories.includes(inputValue)) {
      const filteredPlayers = data.filter(
        (item) => item.gameName === inputValue
      );
      setPlayers(filteredPlayers);
    } else {
      setPlayers([]);
    }
  };

  const handleResetData = () => {
    setPlayers(data);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center items-center h-2/3 flex-col space-y-4">
        <div className="w-full flex justify-center">
          <Input
            className="w-48"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit} type="primary" className="ml-5">
            Submit
          </Button>
          <Button onClick={handleResetData} className="ml-5">
            Reset data
          </Button>
        </div>
        <div className="w-3/4 border-8 rounded-sm flex">
          <div className="w-full h-full text overflow-auto">
            {players.slice(minLimit, limit).map((item, index) => (
              <ScoreItem
                key={index}
                number={index + 1}
                playerName={item.playerName}
                gameName={item.gameName}
                score={item.score}
              />
            ))}
          </div>
        </div>
        <Link to="/">
          <Button className="mt-5">Back to main menu</Button>
        </Link>
      </div>
    </div>
  );
}
