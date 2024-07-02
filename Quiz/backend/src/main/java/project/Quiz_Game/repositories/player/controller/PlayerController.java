package project.Quiz_Game.repositories.player.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.Quiz_Game.repositories.player.entity.Player;
import project.Quiz_Game.repositories.player.service.PlayerService;

import java.util.List;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @PostMapping("/add")
    public void addPlayer(@RequestBody Player player) {
        playerService.savePlayer(player);
    }

    @PutMapping("/update/{id}")
    public Player updatePlayer(@PathVariable Long id, @RequestBody Player updatedPlayer) {
        return playerService.updatePlayer(id, updatedPlayer);
    }
}
