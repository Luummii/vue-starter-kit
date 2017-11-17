import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import webpackConfig from '../../build/webpack.dev.conf'

export default app => {
  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig)

    app.use(devMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      quiet: true,
      lazy: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: true
      },
      headers: { 'X-Custom-Header': 'yes' },
      stats: {
        colors: true
      }
    }))

    app.use(hotMiddleware(compiler, {
      log: false
    }))
  }
}
