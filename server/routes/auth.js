import KoaRouter from 'koa-router'
import user from '../models/user'

const auth = new KoaRouter()

auth
  .post('/api/auth',  async (ctx, next) => {
    ctx.status = 201
    ctx.body = JSON.stringify({ message: 'Hellow word!'})
  })

export default auth
