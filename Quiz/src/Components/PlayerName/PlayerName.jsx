import { Input, Button } from "antd";
import { useState } from "react";
import { useStepContext } from "../../CustomHooks/StepContext.jsx";

export default function PlayerName() {
  const [name, setName] = useState("");
  const { step, incrementStep } = useStepContext();

  const handleSubmit = () => {
    if (name.length >= 5) {
      incrementStep();
      console.log(step);
    }
  };

  const handleNameChanged = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="h-auto flex flex-col items-center justify-center w-full mt-16">
      <div className="w-2/6 flex flex-col items-start">
        <h2 className="mb-2">Enter your name</h2>
        <Input
          className="h-auto w-full"
          required
          onChange={handleNameChanged}
          size="large"
        />
        <Button
          className="mt-3 self-end"
          onClick={() => handleSubmit()}
          type="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
