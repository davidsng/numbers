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
db.on('error', console.error.bind(console, 'connection error: '))

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

module.exports = app
