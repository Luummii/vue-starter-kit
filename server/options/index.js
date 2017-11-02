import historyFallback from 'koa2-connect-history-api-fallback'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import helmet from 'koa-helmet'

export default (app) => {
  app.use(logger())
  app.use(koaBody())
  app.use(helmet())
  app.use(historyFallback({ whiteList: ['/api'] }))   
}