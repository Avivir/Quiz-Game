import { Button, ConfigProvider } from "antd";
import { useState } from "react";
import { useStepContext } from "../../CustomHooks/StepContext";
import { useGameINformationContext } from "../../CustomHooks/GameInformation";

export default function GameMode() {
  const [choice, setChoice] = useState("single");
  const { incrementStep, decrementStep } = useStepContext();
  const { setNewInfo } = useGameINformationContext();

  const handleButtonMode = (name) => {
    if (name === "single") {
      setChoice("single");
    } else {
      setChoice("multi");
    }
  };

  const handleNextButton = () => {
    incrementStep();
    setNewInfo("gameMode", choice);
  };

  return (
    <div className="h-auto flex flex-col mt-16 items-center justify-center">
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Button: {},
          },
        }}
      >
        <div className="space-x-6">
          <Button
            type={choice === "single" ? "primary" : "default"}
            onClick={() => handleButtonMode("single")}
            className=" w-48 "
          >
            Single
          </Button>
          <Button
            onClick={() => handleButtonMode("multi")}
            type={choice === "multi" ? "primary" : "default"}
            className="w-48"
          >
            Multi
          </Button>
        </div>
      </ConfigProvider>
      <div className="flex w-auto gap-4 mt-4 ">
        <Button type="default" onClick={() => decrementStep()}>
          Back
        </Button>
        <Button type="primary" onClick={() => handleNextButton()}>
          Next
        </Button>
      </div>
    </div>
  );
}
