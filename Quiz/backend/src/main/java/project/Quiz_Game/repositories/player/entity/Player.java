package project.Quiz_Game.repositories.player.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import project.Quiz_Game.app.trivia.TriviaCategory;

@Setter
@Getter
@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "total_points")
    private int totalPoints;

    @Column(name = "category_id")
    private int categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "questions_amount")
    private int questionsAmount;

    private String difficulty;

    public Player() {
    }

    public Player(String playerName, int totalPoints, String categoryName, int categoryId, int questionsAmount, String difficulty) {
        this.playerName = playerName;
        this.totalPoints = totalPoints;
        this.categoryName = categoryName;
        this.categoryId = categoryId;
        this.questionsAmount = questionsAmount;
        this.difficulty = difficulty;
    }

}
