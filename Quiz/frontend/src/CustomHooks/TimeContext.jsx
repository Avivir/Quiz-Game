import { useState, useEffect, useRef, createContext, useContext } from "react";
import { QuestionAndAnswer } from "../Models/QuestionsAndAnswers";
import {useQuestionsContext} from '../CustomHooks/QuestionsContext.jsx'

export const TimeContext = createContext();

export const useTimeContext = () => {
  return useContext(TimeContext);
};

export const TimeProvider = ({ children }) => {
  const {questions} = useQuestionsContext();

  const questionService = useRef(new QuestionAndAnswer(questions)).current;
  const timeQuestion = 10;
  const timeBreak = 5;

  const [timeLeft, setTimeLeft] = useState(timeQuestion);
  const [status, setStatus] = useState("active");
  const [isBreak, setIsBreak] = useState(false);
  const [userClickAnswer, setUserClickAnswer] = useState(false);
  const [notAnswer, setNotAnswer] = useState(false);
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
    startTimer(timeBreak);
  };

  const changeQuestion = () => {
    questionService.nextQuestion();
  };

  useEffect(() => {
    startTimer(timeQuestion);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (userClickAnswer) {
      handleRefresh();
    }
  }, [userClickAnswer]);

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
      if (!isBreak) {
        setIsBreak(true);
        startTimer(timeBreak);
        setStatus("exception");
        setNotAnswer(false);
        setUserClickAnswer(true);
      } else {
        setIsBreak(false);
        startTimer(timeQuestion);
        setStatus("active");
        setNotAnswer(true);
        changeQuestion();
        setUserClickAnswer(false);
      }
    }
  }, [timeLeft, isBreak, timeQuestion, timeBreak]);

  const userAnswer = () => {
    if (!isBreak) {
      setUserClickAnswer(true);
    }
  };

  return (
    <TimeContext.Provider
      value={{
        timeLeft,
        status,
        userClickAnswer,
        userAnswer,
        questionService,
        changeQuestion,
        notAnswer,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
