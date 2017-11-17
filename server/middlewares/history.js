import historyFallback from 'koa2-connect-history-api-fallback'

export default app => app.use(historyFallback({ whiteList: ['/api'] }))
