import Koa from 'koa'
import develop from './develop'
import sessions from './sessions'
import routes from './routes'
import statics from './statics'
import options from './options'
import listen from './listen'

const app = new Koa()

options(app)
develop(app)
statics(app)  
routes(app)
sessions(app)
listen(app)