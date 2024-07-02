package project.Quiz_Game.app.questions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuizProperties {

    private String playerName;
    private String gameMode;
    private String categoryName;
    private int categoryId;
    private String difficulty;
    private int questionsAmount;

}
