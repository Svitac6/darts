const express = require('express');
const db = require('../db');
const router = express.Router();

// Récupérer tous les modes de jeu
router.get('/', (req, res) => {
  db.query('SELECT * FROM game_modes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// Ajouter un mode de jeu
router.post('/', (req, res) => {
  const { name, description } = req.body;
  db.query('INSERT INTO game_modes (name, description) VALUES (?, ?)', [name, description], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, name, description });
  });
});

module.exports = router;
