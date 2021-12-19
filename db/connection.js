// Db Setup
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: "roomrent.c3wkr8skvnth.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "roomrent",
  port: 3306
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
