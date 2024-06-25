import { Progress } from "antd";
import { useTimeContext } from "../../CustomHooks/TimeContext.jsx";

export default function CountDownTimer() {
  const { timeLeft, status } = useTimeContext();
  const timeQuestion = 10;
  const timeBreak = 5;

  const progressPercent =
    status === "active"
      ? (timeLeft / timeQuestion) * 100
      : (timeLeft / timeBreak) * 100;

  return (
    <Progress
      percent={progressPercent}
      status={status}
      format={() => `${timeLeft}s`}
    />
  );
}
