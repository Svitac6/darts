const express = require('express');
const db = require('../db');
const router = express.Router();

// Ajouter un lancer
router.post('/', (req, res) => {
  const { game_id, player_id, round_number, throw_number, score, target, multiplier } = req.body;
  db.query(
    'INSERT INTO throws (game_id, player_id, round_number, throw_number, score, target, multiplier) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [game_id, player_id, round_number, throw_number, score, target, multiplier],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId });
    }
  );
});

// Récupérer tous les lancers d'une partie
router.get('/:game_id', (req, res) => {
  db.query(
    'SELECT * FROM throws WHERE game_id = ? ORDER BY round_number, throw_number',
    [req.params.game_id],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).json(results);
    }
  );
});

module.exports = router;
