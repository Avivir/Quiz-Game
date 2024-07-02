package project.Quiz_Game.app.trivia.api;

import org.springframework.web.bind.annotation.*;
import project.Quiz_Game.app.questions.QuizProperties;
import project.Quiz_Game.app.trivia.dto.TriviaResponse;
import project.Quiz_Game.app.trivia.service.TriviaService;

@RestController
@RequestMapping("/api/trivia")
public class TriviaApi {

    private final TriviaService triviaService;

    public TriviaApi(TriviaService triviaService) {
        this.triviaService = triviaService;
    }

    @GetMapping("/questions")
    public TriviaResponse getTriviaQuestions(QuizProperties quizProperties, String token) {
        return triviaService.getTriviaQuestions(quizProperties, token);
    }

    @GetMapping("/token/new")
    public TriviaResponse getNewSessionToken() {
        return triviaService.getNewSessionToken();
    }

    @PostMapping("/token/reset")
    public String resetSessionToken(String token) {
        return triviaService.resetSessionToken(token);
    }
}