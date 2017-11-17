import path from 'path'

export default {
  prod:{
    env: {
      NODE_ENV: JSON.stringify('production')
    },
    assetsRoot: path.join(__dirname, '..', 'dist'),
    assetsPublicPath: '/',
    stylePath: 'css/styles.css',    
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: JSON.stringify('development')
    },
    assetsRoot: path.join(__dirname, '..', 'dist'),
    assetsPublicPath: '/',
    stylePath: 'css/styles.css',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'localhost'
  }
}