import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('works part1', () =>
    supertest(app)
      .get('/part1')
      .set('Accept', 'application/json')
      .expect(200)
  )

  it('works part2 and part3', () => {
    const getValue = Math.floor(Math.random() * 100)
    let res : any
    let word: string

    switch (0) {
      case ((getValue % 3) + (getValue % 5)) : word = 'FizzBuzz'
        break
      case (getValue % 5) : word = 'Buzz'
        break
      case (getValue % 3) : word = 'Fizz'
        break
      default : word = 'x'
    }
    if (getValue % 7) {
      res = supertest(app)
        .get(`/part3/${getValue}`)
        .set('Accept', 'application/json')
        .expect(200)
    } else {
      res = supertest(app)
        .get(`/part3/${getValue}`)
        .set('Accept', 'application/json')
        .expect(200, { value: word })
    }
    return res
  })
})
