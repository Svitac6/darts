const express = require('express');
const db = require('../db');
const router = express.Router();

// Démarrer une nouvelle partie X01
router.post('/start', (req, res) => {
  const { mode, players } = req.body; 
  
  if (!mode || !players || players.length === 0) {
    return res.status(400).json({ error: 'Mode et joueurs requis.' });
  }

  db.query('INSERT INTO games (mode_id, status) VALUES (?, ?)', [mode, 'active'], (err, result) => {
    if (err) return res.status(500).send(err);
    
    const gameId = result.insertId;
    const playerEntries = players.map(playerId => [gameId, playerId]);

    db.query('INSERT INTO game_players (game_id, player_id) VALUES ?', [playerEntries], (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Partie X01 démarrée', gameId });
    });
  });
});

// Mettre à jour le score d'un joueur
router.post('/:gameId/score', (req, res) => {
  const { playerId, score } = req.body;
  const { gameId } = req.params;

  db.query(
    'UPDATE game_players SET score = score + ? WHERE game_id = ? AND player_id = ?',
    [score, gameId, playerId],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(200).json({ message: 'Score mis à jour' });
    }
  );
});

// Terminer une partie
router.post('/:gameId/finish', (req, res) => {
  const { winnerId } = req.body;
  const { gameId } = req.params;

  db.query(
    'UPDATE games SET status = ?, winner_id = ? WHERE id = ?',
    ['finished', winnerId, gameId],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(200).json({ message: 'Partie terminée' });
    }
  );
});

module.exports = router;
