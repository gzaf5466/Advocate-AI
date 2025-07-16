// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'justice_user',
  password: process.env.DB_PASSWORD || 'securepassword',
  database: process.env.DB_NAME || 'justice_app'
});

module.exports = sequelize;