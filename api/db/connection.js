// Db Setup
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "rentroom"
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