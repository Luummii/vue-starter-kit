import user from '../models/user'
import uuid from 'uuid'

export default async (ctx, next) => {
  ctx.status = 201
  const email = ctx.request.body.email
  const result = await user.Select()   
  const id = uuid.v4()    
  if (!ctx.session.uid) ctx.session.uid = id
  ctx.body = JSON.stringify({ message: 'User email: ' + result[0].email })
}
