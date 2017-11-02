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
  db.host = 'ec2-54-247-124-9.eu-west-1.compute.amazonaws.com'
  db.database = 'd5v4a8bdv8saqr'
  db.user = 'hchhlnusfeycow'
  db.password = 'e165d4d18c7d2247f6343758651454c175485de6c237a05fb2f915dc1470d208'  
  db.port = 5432  
}

export default db
