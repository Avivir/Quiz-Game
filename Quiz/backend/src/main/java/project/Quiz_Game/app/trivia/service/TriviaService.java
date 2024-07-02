package project.Quiz_Game.app.trivia.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import project.Quiz_Game.app.questions.QuizProperties;
import project.Quiz_Game.app.trivia.dto.TriviaResponse;

import java.util.Objects;

@Service
public class TriviaService {

    @Value("${opentdb.api.url}")
    private String triviaUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public TriviaResponse getTriviaQuestions(QuizProperties quizProperties, String token) {
        StringBuilder sb = new StringBuilder();
        sb.append(triviaUrl).append("api.php?");
        sb.append("type=multiple");

        sb.append("&amount=").append(quizProperties.getQuestionsAmount());

        if (quizProperties.getCategoryId() != 0){
            sb.append("&category=").append(quizProperties.getCategoryId());
        }

        if (Objects.nonNull(token)){
            sb.append("&token=").append(token);
        }

        if (Objects.nonNull(quizProperties.getDifficulty())){
            sb.append("&difficulty=").append(quizProperties.getDifficulty());
        }

        return restTemplate.getForObject(sb.toString(), TriviaResponse.class);
    }

    public TriviaResponse getNewSessionToken() {
        String url = triviaUrl + "/api_token.php?command=request";
        return restTemplate.getForObject(url, TriviaResponse.class);
    }

    public String resetSessionToken(String token) {
        String url = String.format("%s/api_token.php?command=reset&token=%s", triviaUrl, token);
        return restTemplate.getForObject(url, String.class);
    }

}
