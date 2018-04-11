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
    this.express.use('/', router)
  }
}

export default new App().express
