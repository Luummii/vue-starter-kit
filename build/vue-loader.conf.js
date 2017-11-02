var utils = require('./utils')
var config = require('../config/build')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction,
    extract: isProduction
  })
}