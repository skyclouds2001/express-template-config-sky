const mysql = require('mysql')

const db = mysql.createPool({
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
})

module.exports = db
