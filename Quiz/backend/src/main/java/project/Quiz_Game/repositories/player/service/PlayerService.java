package project.Quiz_Game.repositories.player.service;

import org.springframework.stereotype.Service;
import project.Quiz_Game.repositories.player.dao.PlayerRepository;
import project.Quiz_Game.repositories.player.entity.Player;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public void savePlayer(Player player) {
        playerRepository.save(player);
    }

    public Player updatePlayer(Long id, Player updatedPlayer) {
        Optional<Player> playerOptional = playerRepository.findById(id);
        if (playerOptional.isEmpty()) {
            throw new IllegalArgumentException("Player with id " + id + " not found");
        }

        Player player = playerOptional.get();
        player.setPlayerName(updatedPlayer.getPlayerName());
        player.setTotalPoints(updatedPlayer.getTotalPoints());

        return playerRepository.save(player);
    }
}
