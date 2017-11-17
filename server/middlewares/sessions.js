import session from 'koa-session'
import sessionConfig from '../../config/session'

export default app => {
  app.keys = [sessionConfig.secret]
  app.use(session(sessionConfig, app))
}
