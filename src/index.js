console.log("Welcome to API")

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
const ads = [{
  title: 'Wel]come to API'
}]

app.use(helmet())

app.use(bodyParser.json())

app.use(cors())

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send(ads)
}

app.listen(3001, () => {
  console.log('listening on port 3001')
})
