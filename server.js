const express = require("express")
const db = require("./db/connection")
const cors = require("cors")
const bodyParser = require("body-parser")
const logger = require("morgan")
const routes = require("./routes")
const { wakeDyno } = require('heroku-keep-awake');

const app = express()
const PORT = process.env.PORT || 3000
const DYNO_URL = 'https://git.heroku.com/cool-ridings.git';
const opts = {
  interval: 29,
  logging: false,
  stopTimes: { start: '23:00', end: '06:00' }
}

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
  wakeDyno(DYNO_URL, opts);
})
