package project.Quiz_Game.app.trivia.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class TriviaQuestion {

    private String category;
    private String type;
    private String difficulty;

    @JsonProperty("question")
    private String questionText;

    @JsonProperty("correct_answer")
    private String correctAnswer;

    @JsonProperty("incorrect_answers")
    private List<String> incorrectAnswers;


}
