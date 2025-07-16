// server.js

const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route
app.get('/', (req, res) => {
  res.send('JusticeHub Server is Running 🧑‍⚖️');
});

// Sync DB and start server
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // This creates tables if they don't exist
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;