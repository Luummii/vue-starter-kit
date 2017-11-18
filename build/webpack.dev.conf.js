import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import merge from 'webpack-merge'

import { styleLoaders } from './utils'
import config from './config'
import baseConf from './webpack.base.conf'

const env = config.dev.env

export default merge(baseConf, {
  module: {
    rules: styleLoaders({ sourceMap: false })
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
        notes: ['Process go:']
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
