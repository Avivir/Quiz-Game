package project.Quiz_Game.app.trivia.controller;

import org.springframework.web.bind.annotation.*;
import project.Quiz_Game.app.trivia.dto.TriviaResponse;
import project.Quiz_Game.app.trivia.service.TriviaService;

@RestController
@RequestMapping("/api/trivia")
public class TriviaController {

    private final TriviaService triviaService;

    public TriviaController(TriviaService triviaService) {
        this.triviaService = triviaService;
    }

    @GetMapping("/questions")
    public TriviaResponse getTriviaQuestions(@RequestParam int amount, @RequestParam(required = false) String token) {
        return triviaService.getTriviaQuestions(amount, token);
    }

    @GetMapping("/token/new")
    public TriviaResponse getNewSessionToken() {
        return triviaService.getNewSessionToken();
    }

    @PostMapping("/token/reset")
    public String resetSessionToken(@RequestParam String token) {
        return triviaService.resetSessionToken(token);
    }
}