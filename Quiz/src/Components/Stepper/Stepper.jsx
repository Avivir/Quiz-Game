import { useState, useEffect } from "react";
import { Button, message, Steps, theme, ConfigProvider } from "antd";
import "./Stepper.css";
import { useStepContext } from "../../CustomHooks/StepContext";

export default function Stepper({ steps }) {
  const [current, setCurrent] = useState(0);
  const { step } = useStepContext();

  useEffect(() => {
    setCurrent(step);
  }, [step]);

  //   const items = steps?.map((name, i) => (
  //     <div className="step-item" key={i}>
  //       <div className="step">{i + 1}</div>
  //       <p className="text-gray-400">{name}</p>
  //     </div>
  //   ));

  const items = steps.map((item) => ({
    title: item,
  }));

  return (
    <div className="m-5 h-auto">
      <ConfigProvider
        theme={{
          token: { colorPrimary: "#45f321", colorText: "#ecf0f1", padding: 0 },
          components: {
            Steps: { descriptionMaxWidth: 140 },
          },
        }}
      >
        <Steps
          className="custom-steps"
          current={current}
          labelPlacement="vertical"
          items={items}
        />
      </ConfigProvider>
    </div>
  );
}

// export default function ProgressBar({ steps }) {
//   return (
//     <div className="flex justify-between h-auto mt-4">
//       {steps?.map((name, i) => (
//         <div className="step-item" key={i}>
//           <div className="step">{i + 1}</div>
//           <p className="text-gray-400">{name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
