import { useState, useEffect, useRef, createContext, useContext } from "react";

export const TimeContext = createContext();

export const useTimeContext = () => {
  return useContext(TimeContext);
};

export const TimeProvider = ({ children }) => {
  const timeQuestion = 10;
  const timeBreak = 5;

  const [timeLeft, setTimeLeft] = useState(timeQuestion);
  const [status, setStatus] = useState("active");
  const [isBreak, setIsBreak] = useState(false);
  const [userClickAnswer, setUserClickAnswer] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = (initialTime) => {
    clearInterval(intervalRef.current);
    setTimeLeft(initialTime);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  };

  const handleRefresh = () => {
    clearInterval(intervalRef.current);
    setIsBreak(true);
    setTimeLeft(timeBreak);
    setStatus("exception");
  };

  const changeQuestion = () => {
    // Logika do zmiany pytania
  };

  useEffect(() => {
    startTimer(timeQuestion);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (userClickAnswer) {
      handleRefresh();
      startTimer(timeBreak);
    }
  }, [userClickAnswer]);

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
      if (!isBreak) {
        setIsBreak(true);
        startTimer(timeBreak);
        setStatus("exception");
      } else {
        setIsBreak(false);
        startTimer(timeQuestion);
        setStatus("active");
        changeQuestion();
        setUserClickAnswer(false);
      }
    }
  }, [timeLeft, isBreak, timeQuestion, timeBreak, changeQuestion]);

  const userAnswer = () => {
    setUserClickAnswer(true);
  };

  return (
    <TimeContext.Provider
      value={{
        timeLeft,
        status,
        userClickAnswer,
        userAnswer,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
