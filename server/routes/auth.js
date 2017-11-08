import user from '../models/user'

export default async (ctx, next) => {
  ctx.status = 201
  const email = ctx.request.body.email
  const result = await user.Select()
  ctx.body = JSON.stringify({ message: 'User email: ' + result[0].email })       
  if (!ctx.session.logged) ctx.session.logged = true
}
