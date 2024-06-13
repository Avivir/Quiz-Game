import Header from "../Header/Header";
import "./Game.css";
import { Button, Progress } from "antd";
import { useEffect, useRef, useState } from "react";
import { QuestionAndAnswer } from "../../Models/QuestionsAndAnswers";
import CountDownTimer from "../../Models/CountDownTimer";

export default function Game() {
  const questionService = useRef(new QuestionAndAnswer()).current;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timerStart, setTimerStart] = useState(10);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setCurrentQuestion(questionService.getCurrentQuestion());
  }, [questionService]);

  function newQuestion() {
    const nextQuestion = questionService.nextQuestion();
    setCurrentQuestion(nextQuestion);
    setTimerStart((prevTime) => !prevTime);
  }

  if (!currentQuestion) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex items-center justify-between h-auto">
        <Header />
        <p className="mr-12">Question 1 of 5</p>
        <p className="mr-12">Score:0</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="items-center w-3/4 h-1/3">
          <div className="question-container">
            <p className="flex justify-center items-center ">
              {currentQuestion.question}
            </p>
          </div>
          <div className="h-auto">
            <CountDownTimer timeEnd={newQuestion} initialTimer={timerStart} />
          </div>
          <div className="grid grid-rows-2 grid-cols-2 h-22 gap-4">
            <Button
              ghost
              className="w-full h-full question-container"
              onClick={() => newQuestion("answer")}
            >
              <p>{currentQuestion.all_answers[0]}</p>
            </Button>
            <Button ghost className="w-full h-full question-container-reverse">
              <p>{currentQuestion.all_answers[1]}</p>
            </Button>
            <Button ghost className="w-full h-full question-container">
              <p>{currentQuestion.all_answers[2]}</p>
            </Button>
            <Button
              ghost
              className="w-full h-full question-container-reverse hover:bg-red-100"
            >
              <p>{currentQuestion.all_answers[3]}</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
