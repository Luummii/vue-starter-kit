'use strict'

import Koa from 'koa'
import Router from 'koa-router'

import favicon from './middlewares/favicon'
import statics from './middlewares/statics'
import logger from './middlewares/logger'
import errors from './middlewares/errors'
import bodyParser from './middlewares/bodyParser'
import sessions from './middlewares/sessions'
import helmet from './middlewares/helmet'
import develop from './middlewares/develop'
import history from './middlewares/history'
import csrf from './middlewares/csrf'

// routes
import auth from './routes/auth'

const app = new Koa()
const port = process.env.PORT || 5000

const router = new Router()

favicon(app)
logger(app)
errors(app)
bodyParser(app)
history(app)
develop(app)
sessions(app)
helmet(app)

// routes
router.post('/api/auth', auth)

app.use(router.routes())
   .use(router.allowedMethods())

statics(app)
csrf(app)

app.listen(port) 
