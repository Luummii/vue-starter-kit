import statics from 'koa-static-server'

export default (app) => {
  app.use(statics({rootDir: 'dist', rootPath: '/dist'}))   
}