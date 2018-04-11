import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('works', () =>
    supertest(app)
      .get('/part1')
      .expect('Content-Type', /json/)
      .expect(200)
  )
})
