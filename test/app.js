const app = require('../app/app.js')
const request = require('supertest')
const expect = require('chai').expect

describe('All Tests', () => {
  describe('GET /', () => {
    it('should respond with index.html', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(done)
    })
  })
  describe('GET /scores', () => {
    it('should respond with JSON file', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .expect(res => {
          expect(res.body).to.be.a('object')
        })
        .end(done)
    })
  })
})
