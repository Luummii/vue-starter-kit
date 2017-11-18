import Router from 'koa-router'
import auth from './auth'
import api from '../../config/api'

const router = new Router()

export default (app) => {
  // routes
  router.post(api.user, auth)
  app.use(router.routes())
    .use(router.allowedMethods())
}
