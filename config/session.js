import KnexStore from 'koa-generic-session-knex'
import knex from './knex'

const sessionConfig = {
  store: new KnexStore(knex, {}),  
  key: 'sess',
  maxAge: 600000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  secretKey: '233c31e355c82fff1bc0b0b54e7d6b74eaf561819a73467148411f1bce3f0a37',
  encrypt: true
}

export default sessionConfig