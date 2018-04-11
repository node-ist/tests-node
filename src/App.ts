import * as express from 'express'
import * as cors from 'cors'
import * as madebywiser from './resources/madebywiser'

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
      madebywiser.getPart1((error, response, body) => {
        res.json(JSON.parse(body))
      })
    })

    router.get('/part3/:x', async (req, res) => {
      const x : number = req.params.x
      let val : string
      switch (0) {
        case ((x % 3) + (x % 5)) : val = 'FizzBuzz'
          break
        case (x % 7) :
          try {
            const resAwe = await madebywiser.getPart3(x)
            const res : any = JSON.parse(resAwe.body)
            val = res.value
          } catch (err) { return err }
          break
        case (x % 5) : val = 'Buzz'
          break
        case (x % 3) : val = 'Fizz'
          break
        default : val = 'x'
      }
      return res.json({ value: val })
    })

    this.express.use('/', router)
  }
}

export default new App().express
