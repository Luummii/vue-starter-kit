import session from 'koa-session'
import sessionConfig from '../../config/session'

export default (app) => {
  app.keys = [sessionConfig.secretKey]
  app.use(session(sessionConfig, app))  
  app.use(async (ctx, next) => {     
    if (!ctx.session.logged) ctx.session.logged = true
  })
}
