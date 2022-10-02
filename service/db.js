const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root123456',
  database: 'csy'
})

module.exports = db
