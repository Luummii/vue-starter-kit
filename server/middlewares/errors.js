import winston from 'winston-color'

export default app => app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = 'Наша встреча - это страшная ошибка!'
    winston.error(err)
  }
})
