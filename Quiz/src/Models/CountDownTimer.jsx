import { useState, useEffect } from "react";
import { Progress } from "antd";

export default function CountDownTimer({ timeEnd, initialTimer }) {
  const [timeLeft, setTimeLeft] = useState(initialTimer || 10);
  const [timeBreak, setTimeBreak] = useState(5);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    setTimeLeft(10);
    setTimeBreak(5);
    setIsBreak(true);
  }, [initialTimer]);

  useEffect(() => {
    if (!isBreak) {
      if (timeLeft <= 0) {
        setIsBreak(true);
        setTimeBreak(5);
        return;
      }
    } else {
      if (timeBreak <= 0) {
        setIsBreak(false);
        timeEnd();
        setTimeLeft(10);
        return;
      }
    }

    const intervalId = setInterval(() => {
      if (!isBreak) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        setTimeBreak((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, timeBreak, isBreak, initialTimer]);

  const progressPercent = !isBreak
    ? (timeLeft / (initialTimer || 10)) * 100
    : (timeBreak / 5) * 100;

  return (
    <Progress
      percent={progressPercent}
      status={isBreak ? "exception" : "active"}
      format={() => `${isBreak ? timeBreak : timeLeft}s`}
    />
  );
}
