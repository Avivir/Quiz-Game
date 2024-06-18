import Header from "../Header/Header";
import "./Game.css";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { QuestionAndAnswer } from "../../Models/QuestionsAndAnswers";
import CountDownTimer from "../CountDownTimer/CountDownTimer.jsx";
import { useTimeContext } from "../../CustomHooks/TimeContext.jsx";

export default function Game() {
  const questionService = useRef(new QuestionAndAnswer()).current;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const { userAnswer } = useTimeContext();

  useEffect(() => {
    setCurrentQuestion(questionService.getCurrentQuestion());
  }, [questionService]);

  const newQuestion = () => {
    const nextQuestion = questionService.nextQuestion();
    setCurrentQuestion(nextQuestion);
    startBlinking();
  };

  const checkQuestion = (answer) => {
    questionService.checkIsTheAnswerTrue(answer);
    userAnswer();
  };

  const startBlinking = () => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 3000);
  };

  if (!currentQuestion) {
    return <p>Loading...</p>;
  }

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
                isBlinking ? "blinking-button" : ""
              }`}
              onClick={() => checkQuestion(currentQuestion.all_answers[0])}
            >
              <p>{currentQuestion.all_answers[0]}</p>
            </Button>
            <Button
              ghost
              className="w-full h-full question-container-reverse"
              onClick={() => checkQuestion(currentQuestion.all_answers[1])}
            >
              <p>{currentQuestion.all_answers[1]}</p>
            </Button>
            <Button
              ghost
              className="w-full h-full question-container"
              onClick={() => checkQuestion(currentQuestion.all_answers[2])}
            >
              <p>{currentQuestion.all_answers[2]}</p>
            </Button>
            <Button
              ghost
              className="w-full h-full question-container-reverse"
              onClick={() => checkQuestion(currentQuestion.all_answers[3])}
            >
              <p>{currentQuestion.all_answers[3]}</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
