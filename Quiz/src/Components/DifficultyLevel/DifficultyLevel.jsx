import { Button } from "antd";
import { useState } from "react";

export default function DifficultyLevel() {
  const [selectedButton, setSelectedButton] = useState("easy");

  return (
    <div className="flex h-auto flex-col w-auto justify-center items-center">
      <div>
        <div className="flex flex-col gap-4 w-48">
          <Button
            type={selectedButton === "easy" ? "primary" : "default"}
            onClick={() => setSelectedButton("easy")}
            size="large"
          >
            Easy
          </Button>
          <Button
            type={selectedButton === "medium" ? "primary" : "default"}
            onClick={() => setSelectedButton("medium")}
            size="large"
          >
            Medium
          </Button>
          <Button
            type={selectedButton === "hard" ? "primary" : "default"}
            onClick={() => setSelectedButton("hard")}
            size="large"
          >
            Hard
          </Button>
        </div>
        <div className="flex justify-end mt-8">
          <Button type="primary">Start Game</Button>
        </div>
      </div>
    </div>
  );
}
