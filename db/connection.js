// Allows connection to MySQL database
const mysql = require('mysql2');

// import the environment variables
require('dotenv').config();

// connect to database
const db = mysql.createConnection(
  {
      host: 'localhost',
      // Your MySQL username,
      user: process.env.DB_USER,
      // Your MySQL password
      password: process.env.DB_PW,
      database: process.env.DB_NAME
  },
);

module.exports = db;