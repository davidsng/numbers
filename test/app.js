const app = require('../app/app.js')
const request = require('supertest')
const expect = require('chai').expect

describe('All Tests', () => {
  describe('GET index.html', () => {
    it('should respond with index.html', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
    })
  })
})
