import KnexStore from 'koa-generic-session-knex'
import db from '../db/db'

export default {
  store: new KnexStore(db, {}),
  maxAge: 600000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  encrypt: true,
  secret: '233c31e355c82fff1bc0b0b54e7d6b74eaf561819a73467148411f1bce3f0a37'
}
