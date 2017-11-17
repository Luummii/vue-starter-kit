// Nginx
import serve from 'koa-static-server'

export default app => app.use(serve({ rootDir: 'dist' }))
