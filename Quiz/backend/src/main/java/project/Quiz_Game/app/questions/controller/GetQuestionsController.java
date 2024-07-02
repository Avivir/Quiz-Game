package project.Quiz_Game.app.questions.controller;

import org.springframework.web.bind.annotation.*;
import project.Quiz_Game.app.questions.QuizProperties;
import project.Quiz_Game.app.questions.action.GetQuestionsAction;
import project.Quiz_Game.app.trivia.dto.TriviaQuestion;

import java.util.List;

//@CrossOrigin("localhost:5187")
@RestController
@RequestMapping("/api/questions")
public class GetQuestionsController {

    private final GetQuestionsAction getQuestionsAction;

    public GetQuestionsController(GetQuestionsAction getQuestionsAction) {
        this.getQuestionsAction = getQuestionsAction;
    }

    @PostMapping("/get/{amount}")
    public List<TriviaQuestion> getQuestionsByAmount(@PathVariable int amount) {
        QuizProperties quizProperties = new QuizProperties();
        quizProperties.setQuestionsAmount(amount);
        return getQuestionsAction.get(quizProperties);
    }


    @PostMapping("/get/filter")
    public List<TriviaQuestion> getQuestionByFilter(@RequestBody QuizProperties quizProperties) {
        return getQuestionsAction.get(quizProperties);
    }
}