import Koa from 'koa'
import middlewares from './middlewares'

const app = new Koa()
const port = process.env.PORT || 5000

middlewares.forEach((middleware) => middleware(app))

// For testing
export default app.listen(port)
