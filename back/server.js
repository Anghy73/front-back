const express = require('express')
const cors = require('cors')

const app = express()

const transaction = []

app.use(express.json({
  type: '*/*'
}))

app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/transactions', (req, res) => {
  res.send(JSON.stringify(transaction))
})

app.post('/transactions', (req, res) => {
  transaction.push(req.body)
  res.send(JSON.stringify('Save'))
  console.log(transaction);
})

module.exports = app