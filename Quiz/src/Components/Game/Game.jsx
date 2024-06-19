import Header from "../Header/Header";
import "./Game.css";
import { Button } from "antd";
import { useEffect, useState } from "react";
import CountDownTimer from "../CountDownTimer/CountDownTimer.jsx";
import { useTimeContext } from "../../CustomHooks/TimeContext.jsx";

export default function Game() {
  const { questionService, userAnswer, userClickAnswer, notAnswer } =
    useTimeContext();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [buttonNumber, setButtonNumber] = useState(false);
  const [isBackgroundChanging, setIsBackgroundChanging] = useState(false);

  useEffect(() => {
    setCurrentQuestion(questionService.getCurrentQuestion());
  }, [questionService, userClickAnswer, notAnswer]);

  const checkQuestion = (answer, id) => {
    userAnswer();
    if (!userClickAnswer) {
      setButtonNumber(id);
      startBlinking(answer);
    }
  };

  const startBlinking = (answer) => {
    setIsBlinking(true);

    setTimeout(() => {
      setIsBackgroundChanging(questionService.checkIsTheAnswerTrue(answer));
    }, 3000);

    setTimeout(() => {
      setIsBlinking(false);
    }, 3000);

    setTimeout(() => {
      setIsBackgroundChanging("none");
    }, 5000);
  };

  if (!currentQuestion) {
    return <p>Loading...</p>;
  }

  const getButtonClass = (isBlinking, isBackgroundChanging) => {
    let classes = "";

    if (isBlinking) {
      classes += " blinking-button";
    }

    if (!isBlinking && isBackgroundChanging === "correct") {
      classes += " blinking-button-green";
    } else if (!isBlinking && isBackgroundChanging === "incorrect") {
      classes += " blinking-button-red";
    }
    return classes;
  };

  return (
    <>
      <div className="flex items-center justify-between h-auto">
        <Header />
        <p className="mr-12">
          Question {questionService.totalQuestion} of{" "}
          {questionService.amountOfQuestion}
        </p>
        <p className="mr-12">Score: {questionService.totalPoints}</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="items-center w-3/4 h-1/3">
          <div className="question-container">
            <p className="flex justify-center items-center ">
              {currentQuestion.question}
            </p>
          </div>
          <div className="h-auto">
            <CountDownTimer />
          </div>
          <div className="grid grid-rows-2 grid-cols-2 h-22 gap-4">
            <Button
              ghost
              className={`w-full h-full question-container ${
                buttonNumber === 1
                  ? getButtonClass(isBlinking, isBackgroundChanging)
                  : ""
              }`}
              onClick={() => checkQuestion(currentQuestion.all_answers[0], 1)}
            >
              <p>{currentQuestion.all_answers[0]}</p>
            </Button>
            <Button
              ghost
              className={`w-full h-full question-container-reverse ${
                buttonNumber === 2
                  ? getButtonClass(isBlinking, isBackgroundChanging)
                  : ""
              }`}
              onClick={() => checkQuestion(currentQuestion.all_answers[1], 2)}
            >
              <p>{currentQuestion.all_answers[1]}</p>
            </Button>
            <Button
              ghost
              className={`w-full h-full question-container ${
                buttonNumber === 3
                  ? getButtonClass(isBlinking, isBackgroundChanging)
                  : ""
              }`}
              onClick={() => checkQuestion(currentQuestion.all_answers[2], 3)}
            >
              <p>{currentQuestion.all_answers[2]}</p>
            </Button>
            <Button
              ghost
              className={`w-full h-full question-container-reverse ${
                buttonNumber === 4
                  ? getButtonClass(isBlinking, isBackgroundChanging)
                  : ""
              }`}
              onClick={() => checkQuestion(currentQuestion.all_answers[3], 4)}
            >
              <p>{currentQuestion.all_answers[3]}</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
