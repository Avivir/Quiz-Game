package project.Quiz_Game.app.questions.controller;

import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.Quiz_Game.app.questions.action.GetQuestionsAction;
import project.Quiz_Game.app.trivia.dto.TriviaQuestion;

import java.util.List;

//TODO Adres do ogarniecia
//@CrossOrigin("")
@RestController
@RequestMapping("/api/questions")
public class GetQuestionsController {

    private final GetQuestionsAction getQuestionsAction;

    public GetQuestionsController(GetQuestionsAction getQuestionsAction) {
        this.getQuestionsAction = getQuestionsAction;
    }

    @GetMapping("/get/{amount}")
    public List<TriviaQuestion> getQuestions(@PathVariable int amount) {return getQuestionsAction.execute(amount);}
}
