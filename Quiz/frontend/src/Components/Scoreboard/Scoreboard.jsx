import { useState, useEffect } from "react";
import Header from "../Header/Header";
import ScoreItem from "../ScoreItem/ScoreItem";
import "./Scoreboard.css";
import { data } from "../../Models/playersScores";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { categories } from "../../Models/categoriesData.js";

export default function Scoreboard() {
  const [players, setPlayers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [minLimit, setMinLimit] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/players", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      data.sort((a, b) => b.totalPoints - a.totalPoints);
      setPlayers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (categories.includes(inputValue)) {
      const filteredPlayers = players.filter(
        (item) => item.categoryName === inputValue
      );
      setPlayers(filteredPlayers);
    } else {
      setPlayers([]);
    }
  };

  const handleResetData = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center items-center h-2/3 flex-col space-y-4">
        <div className="w-full flex justify-center h-auto">
          <Input
            className="w-48 h-8"
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
            {players.slice(minLimit, data.length).map((item, index) => (
              <ScoreItem
                key={index}
                number={index + 1}
                playerName={item.playerName}
                categoryName={item.categoryName}
                totalPoints={item.totalPoints}
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
