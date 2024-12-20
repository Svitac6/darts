const express = require('express');
const db = require('../db');
const router = express.Router();

// Récupérer tous les joueurs
router.get('/', (req, res) => {
  db.query('SELECT * FROM players', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// Ajouter un joueur
router.post('/', (req, res) => {
  const { name, photo } = req.body;
  db.query('INSERT INTO players (name, photo) VALUES (?, ?)', [name, photo], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, name, photo });
  });
});

// Récupérer un joueur par ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM players WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send('Joueur non trouvé.');
    res.status(200).json(result[0]);
  });
});

module.exports = router;
