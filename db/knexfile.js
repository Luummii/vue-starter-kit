require('babel-register')

const dbconnect = require( '../config/dbconnect').default

module.exports = {
  client: 'pg',  
  connection: {
    user: dbconnect.user,
    password: dbconnect.password,
    host: dbconnect.host,
    port: dbconnect.port,
    database: dbconnect.database,
    ssl: true,
    max: 100
  },
  pool: {
    min: 2,
    max: 10
  }
}