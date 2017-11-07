'use strict'

import Koa from 'koa'

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
import routes from './routes'

const app = new Koa()
const port = process.env.PORT || 5000

favicon(app)
logger(app)
errors(app)
bodyParser(app)
history(app)
develop(app)
helmet(app) // to consider
sessions(app)
routes(app)
csrf(app)
statics(app)

app.listen(port) 