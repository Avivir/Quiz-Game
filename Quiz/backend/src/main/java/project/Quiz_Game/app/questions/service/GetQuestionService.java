package project.Quiz_Game.app.questions.service;

import org.springframework.stereotype.Service;
import project.Quiz_Game.app.questions.QuizProperties;
import project.Quiz_Game.app.trivia.api.TriviaApi;
import project.Quiz_Game.app.trivia.dto.TriviaQuestion;
import project.Quiz_Game.app.trivia.dto.TriviaResponse;


import java.util.List;

@Service
public class GetQuestionService {

    private static TriviaApi triviaApi;

    public GetQuestionService(TriviaApi triviaApi) {
        this.triviaApi = triviaApi;
    }


    public List<TriviaQuestion> execute(QuizProperties quizProperties) {
        String token = triviaApi.getNewSessionToken().getToken();

        try {
            Thread.sleep(6000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        TriviaResponse response = triviaApi.getTriviaQuestions(quizProperties, token);


        if (response.getResponseCode() == 4) {
            token = triviaApi.resetSessionToken(token);
        }

        return response.getResults();
    }
}
