export default async (ctx, next) => {
  ctx.status = 201
  ctx.body = JSON.stringify({ message: 'Hellow VueJS!'})       
  if (!ctx.session.logged) ctx.session.logged = true
}
