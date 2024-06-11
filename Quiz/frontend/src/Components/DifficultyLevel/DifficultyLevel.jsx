import { Button } from "antd";
import { useState } from "react";
import { useGameINformationContext } from "../../CustomHooks/GameInformation";
import { useStepContext } from "../../CustomHooks/StepContext";

export default function DifficultyLevel() {
  const [selectedButton, setSelectedButton] = useState("easy");
  const { getInformationAsJson, setNewInfo } = useGameINformationContext();
  const { decrementStep } = useStepContext();

  const startHandle = (selectedButton) => {
    setNewInfo("difficulty", selectedButton);
    console.log(getInformationAsJson());
  };

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
        <div className="mt-8 flex justify-center w-auto gap-4">
          <Button type="default" onClick={() => decrementStep()}>
            Back
          </Button>
          <Button type="primary" onClick={() => startHandle(selectedButton)}>
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}
