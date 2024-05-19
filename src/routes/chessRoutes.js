// chessRoutes.js

const express = require('express');
const router = express.Router();
const ChessPlayer = require('../models/chessPlayers');

// Create
router.post('/', async (req, res) => {
  try {
    const chessPlayer = await ChessPlayer.create(req.body);
    res.status(201).json(chessPlayer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read
// Inside chessRoutes.js

// Read
router.get('/', async (req, res) => {
    try {
      const { rank, name, country, rating, birthYear, page = 1, limit = 10 } = req.query;
  
      const query = {};
      if (rank) query.rank = rank;
      if (name) query.name = { $regex: new RegExp(name, 'i') };
      if (country) query.country = country;
      if (rating) query.rating = rating;
      if (birthYear) query.birthYear = birthYear;
  
      const players = await ChessPlayer.find(query)
        .select('-__v')
        .sort({ rank: 1 }) // Example sorting by rank in ascending order
        .limit(parseInt(limit))
        .skip((page - 1) * limit);
  
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Update
router.put('/:id', async (req, res) => {
  try {
    const chessPlayer = await ChessPlayer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(chessPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await ChessPlayer.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
