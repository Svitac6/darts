const express = require('express');
const db = require('../db');
const router = express.Router();

// Récupérer toutes les parties
router.get('/', (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// Ajouter une partie
router.post('/', (req, res) => {
  const { mode_id } = req.body;
  db.query('INSERT INTO games (mode_id) VALUES (?)', [mode_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId });
  });
});

// Mettre à jour l'état d'une partie
router.patch('/:id', (req, res) => {
  const { status, winner_id } = req.body;
  db.query('UPDATE games SET status = ?, winner_id = ? WHERE id = ?', [status, winner_id, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Partie mise à jour.');
  });
});

module.exports = router;
