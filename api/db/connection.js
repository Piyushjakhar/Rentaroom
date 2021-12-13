//Db Setup
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 4000,
  password: '',
  database: 'roomrent'
})

connection.connect()

var queryProcess = () => {
  connection.query('SELECT * FROM room', function (error, results, fields) {
    if (error) throw error
    console.log(results)
  })
} 