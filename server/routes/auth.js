import user from '../models/user'
import uuid from 'uuid'

export default async (ctx, next) => {
  ctx.status = 201
  const email = ctx.request.body.email
  if (!email) {
    ctx.throw(400)
  }
  const result = await user.Select()
                           .then(console.log('Ok'))
                           .catch((err) => {
                              console.error(err)
                           }) 
  if (!result[0].email) {
    ctx.throw(400)
  }  
  const id = uuid.v4()    
  if (!ctx.session.uid) ctx.session.uid = id
  ctx.body = JSON.stringify({ message: 'User email: ' + result[0].email })
}
