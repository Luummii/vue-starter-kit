const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')

const utils = require('./utils')
const config = require('../config/build')
const baseConf = require('./webpack.base.conf')

const env = config.dev.env
const host = config.dev.host
const port = config.dev.port

module.exports = merge(baseConf, {
  module: {
    rules: utils.styleLoaders({ sourceMap: false })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue-starter-kit - the template for fast start your app.',
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),      
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ]),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You appication is running here http://localhost:5000'],
        notes: ['Your application start development']
      },
      clearConsole: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),    
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})