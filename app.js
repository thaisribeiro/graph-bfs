import dotenv from 'dotenv'
import ExpressApplication from 'express-application'

dotenv.config()

const app = new ExpressApplication({
  name: 'BFS - Digraph',
  services: {
    container: ['./src/services']
  },
  port: process.env.PORT || 8081,
  environment: process.env.NODE_ENV || 'development',
  serverless: (process.env.SERVERLESS == 'true'),
  bodyParser: { json: { limit: '20mb' } }
})

app.init()

app.errorHandling([
  'ResourceAlreadyExists',
  'ResourceNotFound',
  'JoiError'
])

export default app
