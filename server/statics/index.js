import statics from 'koa-static-server'
import path from 'path'

export default (app) => { 
  app.use(statics({ rootDir: 'dist' }))
}