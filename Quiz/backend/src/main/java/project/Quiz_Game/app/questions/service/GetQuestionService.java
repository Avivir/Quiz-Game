package project.Quiz_Game.app.questions.service;

import org.springframework.stereotype.Service;
import project.Quiz_Game.app.trivia.controller.TriviaController;
import project.Quiz_Game.app.trivia.dto.TriviaQuestion;
import project.Quiz_Game.app.trivia.dto.TriviaResponse;

import java.util.ArrayList;
import java.util.List;

@Service
public class GetQuestionService {

    private static TriviaController triviaController;

    public GetQuestionService(TriviaController triviaController) {
        this.triviaController = triviaController;
    }


    public List<TriviaQuestion> execute(int amount) {
        String token = triviaController.getNewSessionToken().getToken();

        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        TriviaResponse response = triviaController.getTriviaQuestions(amount, token);


        if (response.getResponseCode() == 4) {
            token = triviaController.resetSessionToken(token);
        }

        return response.getResults();
    }
}
