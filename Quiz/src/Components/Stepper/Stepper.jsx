import React, { useState } from "react";
import { Button, message, Steps, theme, ConfigProvider } from "antd";
import Column from "antd/es/table/Column";

export default function Stepper({ steps }) {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
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
    <ConfigProvider theme={{ algorithm: theme }}>
      <div className="m-5">
        <Steps current={1} labelPlacement="vertical" items={items} />
      </div>
    </ConfigProvider>
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
