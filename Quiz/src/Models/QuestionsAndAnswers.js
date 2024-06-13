import { dummyData } from "./dummyData";

export class QuestionAndAnswer {
  totalPoints = 0;

  constructor() {
    this.questions = [...dummyData.results];
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

    const shuffledAnswers = this.shuffleAnswers(answers);
    return { ...currentQuestion, all_answers: shuffledAnswers };
  }

  nextQuestion() {
    this.questions.shift();
    return this.getCurrentQuestion();
  }

  checkIsTheAnswerTrue(answer) {
    if (answer === this.questions[0].correct_answer) {
      this.totalPoints += 10;
    }

    return this.totalPoints;
  }

  shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }
}
