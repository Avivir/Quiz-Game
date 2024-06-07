import { Button, ConfigProvider } from "antd";
import { useState } from "react";
import { useStepContext } from "../../CustomHooks/StepContext";

export default function GameMode() {
  const [choice, setChoice] = useState(true);
  const { incrementStep } = useStepContext();

  const handleButtonMode = (name) => {
    if (name === "single") {
      setChoice(true);
    } else {
      setChoice(false);
    }
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
            type={choice ? "primary" : "default"}
            onClick={() => handleButtonMode("single")}
            className=" w-48 "
          >
            Single
          </Button>
          <Button
            onClick={() => handleButtonMode("multi")}
            type={!choice ? "primary" : "default"}
            className="w-48"
          >
            Multi
          </Button>
        </div>
      </ConfigProvider>
      <div className="mt-4">
        <Button type="primary" onClick={() => incrementStep()}>
          Next
        </Button>
      </div>
    </div>
  );
}
