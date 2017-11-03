module.exports = {
  development: {
    client: 'pg',  
    connection: {
      user: 'hchhlnusfeycow',
      password: 'e165d4d18c7d2247f6343758651454c175485de6c237a05fb2f915dc1470d208',
      host: 'ec2-54-247-124-9.eu-west-1.compute.amazonaws.com',
      port: 5432,
      database: 'd5v4a8bdv8saqr',
      ssl: true,
      max: 100
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}