'use strict'
import url from 'url'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test'

const dbconnect = {}

if (process.env.NODE_ENV === 'production') {
  const params = url.parse(process.env.DATABASE_URL)
  const auth = params.auth.split(':')
  dbconnect.user = auth[0]
  dbconnect.password = auth[1]
  dbconnect.host = params.hostname
  dbconnect.port = params.port
  dbconnect.database = params.pathname.split('/')[1]
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  dbconnect.host = 'ec2-54-247-124-9.eu-west-1.compute.amazonaws.com'
  dbconnect.database = 'd5v4a8bdv8saqr'
  dbconnect.user = 'hchhlnusfeycow'
  dbconnect.password = 'e165d4d18c7d2247f6343758651454c175485de6c237a05fb2f915dc1470d208'  
  dbconnect.port = 5432  
}

export default dbconnect
