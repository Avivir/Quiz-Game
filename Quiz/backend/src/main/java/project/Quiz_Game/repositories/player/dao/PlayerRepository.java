package project.Quiz_Game.repositories.player.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.Quiz_Game.repositories.player.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
}