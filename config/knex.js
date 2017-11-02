import db from './db'
import knex from 'knex'

const knexConfig = {
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

export default knex(knexConfig)
