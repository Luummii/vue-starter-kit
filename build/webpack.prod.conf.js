import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'
import merge from 'webpack-merge'
import { styleLoaders } from './utils'
import config from './config'
import baseConf from './webpack.base.conf'

const env = config.prod.env

export default merge(baseConf, {
  module: {
    rules: styleLoaders({
      sourceMap: true,
      extract: true
    })
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue-starter-kit - the template for fast start your app.',
      filename: 'index.html',
      inject: true,
      hash: true,
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' + config.prod.productionGzipExtensions.join('|') + ')$'
      ),
      threshold: 10000,
      minRatio: 0.8
    }),
    new ExtractTextPlugin(config.prod.stylePath),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        warnings: false,
        drop_console: true, // eslint-disable-line
        unsafe: true
      },
      sourceMap: true
    })
  ]
})
