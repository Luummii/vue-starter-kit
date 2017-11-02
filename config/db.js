import url from 'url'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test'

const db = {}

if (process.env.NODE_ENV === 'production') {
  const params = url.parse(process.env.DATABASE_URL)
  const auth = params.auth.split(':')
  db.user = auth[0]
  db.password = auth[1]
  db.host = params.hostname
  db.port = params.port
  db.database = params.pathname.split('/')[1]
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  db.host = 'ec2-46-51-187-253.eu-west-1.compute.amazonaws.com'
  db.database = 'd1fku5melgbgot'
  db.user = 'vdxuairepiuzcm'
  db.password = '233c31e355c82fff1bc0b0b54e7d6b74eaf561819a73467148411f1bce3f0a37'  
  db.port = 5432  
}

export default db
