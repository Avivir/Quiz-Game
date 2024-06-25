import { dummyData } from "./dummyData.js";

export class QuestionAndAnswer {
  totalPoints = 0;
  amountOfQuestion = 0;
  totalQuestion = 1;
  userAnswerQuestion = false;
  answerIsShuffle = false;
  shuffledAnswers = null;

  constructor() {
    this.questions = [...dummyData.results];
    this.amountOfQuestion = this.questions.length;
  }

  getCurrentQuestion() {
    if (this.questions.length === 0) {
      return null;
    }

    const currentQuestion = this.questions[0];
    const answers = [
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ];

    if (!this.answerIsShuffle) {
      this.shuffledAnswers = this.shuffleAnswers(answers);
      this.answerIsShuffle = true;
      this.userAnswerQuestion = false;
    }

    return { ...currentQuestion, all_answers: this.shuffledAnswers };
  }

  nextQuestion() {
    this.questions.shift();
    this.totalQuestion += 1;
    this.answerIsShuffle = false;
    return this.getCurrentQuestion();
  }

  checkIsTheAnswerTrue(answer) {
    if (
      answer === this.questions[0].correct_answer &&
      !this.userAnswerQuestion
    ) {
      this.totalPoints += 10;
      this.userAnswerQuestion = true;
      return "correct";
    } else {
      return "incorrect";
    }
  }

  shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }
}
