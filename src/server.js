//server.js

const express = require('express');
const connectDB = require('./conn'); // Adjusted path to conn.js
const chessRoutes = require('./routes/chessRoutes'); // Adjusted path to chessRoutes.js
const ChessPlayer = require('./models/chessPlayers'); // Import the ChessPlayer model

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/chess', chessRoutes);

app.get('/', async (req, res) => {
  try {
    const players = await ChessPlayer.find(); // Fetch all chess players
    res.json(players); // Return the players as JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
