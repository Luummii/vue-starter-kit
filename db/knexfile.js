require('babel-register')

const db = require( '../config/db').default

module.exports = {
  client: 'pg',  
  connection: {
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    ssl: true,
    max: 100
  },
  pool: {
    min: 2,
    max: 10
  }
}

// knex.migrate.latest([knexConfig])