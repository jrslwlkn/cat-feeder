const express = require('express')
const app = express()
const port = 3001

let meals = 0;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/feed', (req, res) => {
  if (req.body.value === 1) {
    meals += 1;
  }
  res.send({ meals });
})

app.get('/check', (req, res) => {
  res.send({ meals });
  meals = 0;
})

app.listen(port, () => console.log(`Working on port ${port}!`))
