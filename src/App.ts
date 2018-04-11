import * as express from 'express'
import * as cors from 'cors'
import * as request from 'request'

class App {
  public express;

  constructor () {
    this.express = express()
    this.express.use(cors())
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/part1', (req, res) => {
      request.get('http://dev-test.madebywiser.com/part1', (error, response, body) => {
        res.json(JSON.parse(body))
      })
    })

    router.get('/part2/:x', (req, res) => {
      const x : number = req.params.x
      let val : string
      switch (0) {
        case ((x % 3) + (x % 5)) : val = 'FizzBuzz'
          break
        case (x % 3) : val = 'Fizz'
          break
        case (x % 5) : val = 'Buzz'
          break
        default : val = 'x'
      }

      res.json({ value: val })
    })

    this.express.use('/', router)
  }
}

export default new App().express
