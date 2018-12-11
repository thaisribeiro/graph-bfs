import 'babel-polyfill'

describe('Graph Service GET', () => {
  it('should return success message and order to visit nodes', (done) => {
    request.get('/graph')
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('status')
        expect(res.body).to.have.property('data')

        done()
      })
  })

  it('should return success message and order to visit nodes', (done) => {
    request.get('/graph/2')
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('status')
        expect(res.body).to.have.property('data')

        done()
      })
  })
})
