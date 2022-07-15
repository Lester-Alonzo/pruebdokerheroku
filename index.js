import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()
console.log(process.env.API)

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_, res) => {
  res.status(200).json({mssg: "hola desde docker"})
})

app.post('/', (req, res) => {
  const {data} = req.body
  res.status(200).json({data})
})

app.listen(3000, () => console.log('http://localhost:3000'))

