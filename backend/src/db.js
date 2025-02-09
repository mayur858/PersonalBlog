const { Pool } = require("pg");
require("dotenv").config(); 

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT, 
  ssl: {
    rejectUnauthorized: false,  // Ensures SSL is accepted even if certificate isn't fully verified
  },
});

module.exports = pool; 
