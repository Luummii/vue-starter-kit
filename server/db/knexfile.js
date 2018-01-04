require('babel-register')

const connect = require('./connect').default

module.exports = {
  client: connect.db.client,
  connection: {
    user: connect.db.user,
    password: connect.db.password,
    host: connect.db.host,
    port: connect.db.port,
    database: connect.db.database,
    ssl: true,
    max: 100
  },
  pool: {
    min: 2,
    max: 10
  },
  debug: false
}
