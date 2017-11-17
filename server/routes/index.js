import Router from 'koa-router'

import auth from './auth'

const router = new Router()

export default (app) => {
  // routes
  router.post('/api/auth', auth)
  app.use(router.routes())
      .use(router.allowedMethods())
}