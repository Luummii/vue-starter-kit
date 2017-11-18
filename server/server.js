import Koa from 'koa'
import middlewares from './middlewares'
import configServer from '../config/server'

const app = new Koa()

middlewares.forEach((middleware) => middleware(app))

// For testing
export default app.listen(configServer.port)
