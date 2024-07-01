package project.Quiz_Game.app.trivia.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import project.Quiz_Game.app.trivia.dto.TriviaResponse;

@Service
public class TriviaService {

    @Value("${opentdb.api.url}")
    private String triviaUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public TriviaResponse getTriviaQuestions(int amount, String token) {
        String url = String.format("%sapi.php?amount=%d&token=%s", triviaUrl, amount, token);
        System.out.println(url);
        return restTemplate.getForObject(url, TriviaResponse.class);
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
