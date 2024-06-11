import { Input, Button, Alert } from "antd";
import { useState } from "react";
import { useStepContext } from "../../CustomHooks/StepContext.jsx";
import { useGameINformationContext } from "../../CustomHooks/GameInformation.jsx";

export default function PlayerName() {
  const [name, setName] = useState("");
  const { incrementStep } = useStepContext();
  const [error, setError] = useState("");
  const { setNewInfo } = useGameINformationContext();

  const handleSubmit = () => {
    if (name.trim().length === 0) {
      setError("Name is required.");
    } else if (name.trim().length < 5) {
      setError("Name must be at least 5 characters long.");
    } else {
      setError("");
      setNewInfo("playerName", name);
      incrementStep();
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
          value={name}
        />
        {error && (
          <Alert message={error} type="error" showIcon className="mt-2" />
        )}
        <Button className="mt-3 self-end" onClick={handleSubmit} type="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
