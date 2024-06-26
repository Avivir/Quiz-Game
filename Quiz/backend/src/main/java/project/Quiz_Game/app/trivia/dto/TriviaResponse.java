package project.Quiz_Game.app.trivia.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class TriviaResponse {

    @JsonProperty("response_code")
    private int responseCode;

    @JsonProperty("results")
    private List<TriviaQuestion> results;

    private String token;

}
