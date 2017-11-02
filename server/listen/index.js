const port = process.env.PORT || 5000

export default (app) => {
  console.log('port **************************************')
  app.listen(port)  
}