import { Button, InputNumber } from "antd";
import { useState } from "react";
import { useStepContext } from "../../CustomHooks/StepContext";
import { useGameInformationContext } from "../../CustomHooks/GameInformation";

export default function GameMode() {
  const { incrementStep, decrementStep } = useStepContext();
  const { setNewInfo } = useGameInformationContext();
  const [inputValue, setInputValue] = useState(5);

  const handleNextButton = () => {
    incrementStep();
    setNewInfo("questionsAmount", inputValue);
  };

  return (
    <div className="h-auto flex flex-col mt-16 items-center justify-center">
      <div className="space-x-6">
        <InputNumber
          min={1}
          max={40}
          defaultValue={5}
          onChange={(value) => setInputValue(value)}
          size="large"
        />
      </div>
      <div className="flex w-auto gap-4 mt-4 mb-5">
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
