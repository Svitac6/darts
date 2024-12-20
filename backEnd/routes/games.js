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

router.delete('/:id', (req, res) => {
    const playerId = req.params.id;

    db.query('DELETE FROM players WHERE id = ?', [playerId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erreur lors de la suppression du joueur.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Joueur non trouvé.' });
        }

        res.status(200).json({ message: 'Joueur supprimé avec succès.' });
    });
});

module.exports = router;
