const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const playersRoutes = require('./routes/players');
const gamesRoutes = require('./routes/games.js');
const throwsRoutes = require('./routes/throws');
const modesRoutes = require('./routes/modes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/players', playersRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/throws', throwsRoutes);
app.use('/api/modes', modesRoutes);

// Serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
