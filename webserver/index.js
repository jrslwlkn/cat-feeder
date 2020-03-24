const express = require('express')
const app = express()
const port = 3001

let meals = 0;

app.get('/feed', (req, res) => {
  meals += 1;
  res.send({ meals });
})

app.get('/check', (req, res) => {
  res.send({ meals });
  meals = 0;
})

app.listen(port, () => console.log(`Working on port ${port}!`))
