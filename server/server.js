import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'

const app = new Koa()
const port = process.env.PORT || 5000

middlewares.forEach((middleware, i) => {  
  if (i === middlewares.length - 3) routes(app)
  middleware(app)
})

// For testing
export default app.listen(port) 


