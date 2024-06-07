import { useState, createContext, useContext } from "react";

export const StepContext = createContext();

export const useStepContext = () => {
  return useContext(StepContext);
};

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const incrementStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const decrementStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <StepContext.Provider value={{ step, incrementStep, decrementStep }}>
      {children}
    </StepContext.Provider>
  );
};
