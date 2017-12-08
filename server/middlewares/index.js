import favicon from './favicon'
import statics from './statics'
import logger from './logger'
import errors from './errors'
import bodyParser from './bodyParser'
import sessions from './sessions'
import helmet from './helmet'
import develop from './develop'
import history from './history'
import csrf from './csrf'
import routes from '../routes'

export default [
  favicon,
  logger,
  errors,
  bodyParser,
  history,
  develop,
  sessions,
  helmet,
  routes,
  statics,
  csrf
]
