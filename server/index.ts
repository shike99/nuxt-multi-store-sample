import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser)

export default app