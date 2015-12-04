const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect to database
const dbuser = 'user'
const dbpassword = 'password'
const dburl = 'mongodb://' + dbuser + ':' + dbpassword + '@ds059644.mongolab.com:59644/playground'
mongoose.connect(dburl)
const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))

// define mongoose model (schema)
const Score = mongoose.model('Score', {
  "playerName": String,
  "score": Number
})

app.get('/scores', (req, res) => {
  Score.model('Score').find((err, scores) => {
    if (err) { console.error(err); res.status(404).end(err) }
    res.json(scores)
  })
})

app.post('/scores', (req, res) => {
  const score = new Score(req.body)
  score.save(err => {
    if (err) { console.error(err); res.status(500).end(err) }
    console.log('New player added.')
    res.end()
  })
})

app.put('/scores/', (req, res) => {
  var query = { playerName: req.body.playerName }
  Score.findOneAndUpdate(query, req.body, { new: true }, (err, score) => {
    if (err) {
      console.error(err)
      res.status(500).end(err)
    } else if (score) {
      console.log('Player updated', JSON.stringify(score))
      res.status(200).end('Player updated')
    } else {
      console.warn('Not found')
      res.status(404).end('Not found')
    }
  })
})

module.exports = app
