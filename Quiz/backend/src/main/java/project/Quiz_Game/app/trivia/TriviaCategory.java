package project.Quiz_Game.app.trivia;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TriviaCategory {

    private int id;
    private String name;

    TriviaCategory(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
