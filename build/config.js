import path from 'path'

export default {
  prod: {
    env: {
      NODE_ENV: JSON.stringify('production')
    },
    stylePath: 'css/styles.css',
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: JSON.stringify('development')
    }
  },
  assetsRoot: path.join(__dirname, '..', 'dist'),
  assetsPublicPath: '/'
}
