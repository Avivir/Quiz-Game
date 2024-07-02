DROP TABLE IF EXISTS player;
CREATE TABLE player (
                        id INT IDENTITY PRIMARY KEY,
                        player_name VARCHAR(255),
                        total_points INT,
                        questions_amount INT,
                        category_name VARCHAR(255),
                        category_id INT,
                        difficulty VARCHAR(255)
);