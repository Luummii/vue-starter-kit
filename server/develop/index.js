import webpack from 'webpack'
import convert from 'koa-convert'
import webpackMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'
import webpackConfig from '../../build/webpack.dev.conf'

export default (app) => {
  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig)

    app.use(convert(webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true
    })))
    
    app.use(convert(webpackHotMiddleware(compiler, { 
      log: false 
    })))
  }  
}
