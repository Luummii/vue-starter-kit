import url from 'url'

const env = process.env.NODE_ENV === 'production'
const params = env ? url.parse(process.env.DATABASE_URL) : ''
const auth = env ? params.auth.split(':') : ''

export default {
  db: {
    client: 'pg',
    host: env ? params.hostname : 'ec2-54-247-124-9.eu-west-1.compute.amazonaws.com',
    database: env ? params.pathname.split('/')[1] : 'd5v4a8bdv8saqr',
    user: env ? auth[0] : 'hchhlnusfeycow',
    password: env ? auth[1] : 'e165d4d18c7d2247f6343758651454c175485de6c237a05fb2f915dc1470d208', 
    port: env ? params.port : 5432
  }
}
