import Koa from 'koa'
import middlewares from './middlewares'
import configServer from '../config/server'
import winston from 'winston-color'

const app = new Koa()

middlewares.forEach((middleware) => middleware(app))

winston.warn(`Server is listening port ${configServer.port}`)

// For testing
export default app.listen(configServer.port)
