import statics from 'koa-static'

export default (app) => {
  app.use(statics(__dirname + '/dist'))   
}