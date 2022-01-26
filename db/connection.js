// Db Setup
require('dotenv').config()


var mysql = require('mysql')
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
})

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
  }
  else {
    console.log('Connection established');
  }
})

module.exports = connection;
