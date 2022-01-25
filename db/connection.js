// Db Setup
const keys = require('../utility/keys')

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: keys.DB_HOST,
  user: keys.DB_USERNAME,
  password: keys.DB_PASSWORD,
  database: keys.DATABASE,
  port: keys.DB_PORT
})

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
  }
  else {
    console.log('Connection established');
  }
})

module.exports = connection;
