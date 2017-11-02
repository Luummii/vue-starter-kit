import statics from 'koa-static'

export default (app) => {
  console.log('statics **************************************')
  app.use(statics(__dirname + '/dist'))   
}