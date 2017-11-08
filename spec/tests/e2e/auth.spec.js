import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../../server/server'
import model from '../../data/auth'

chai.use(chaiHttp)

describe('Auth:', () => {
  it('Query auth', (done) => {
    chai.request(server).post('/api/auth').send(model.req).end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toEqual(model.res.statusCode)
      done()
    })
  })
})
