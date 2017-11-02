import auth from './auth'

export default (app) => {
  app.use(auth.routes())
     .use(auth.allowedMethods())
}