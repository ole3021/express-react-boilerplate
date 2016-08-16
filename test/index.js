import 'babel-polyfill'
import app from '../server'
import supertest from 'supertest'

const request = supertest.agent(app.listen())

// Convert required files from ES6 to ES5
require('babel-core/register')

/* global describe it */
describe('Index', function () {
  it('should return helloWorld', (done) => {
    request.get('/').expect(200).end(done)
  })
})
