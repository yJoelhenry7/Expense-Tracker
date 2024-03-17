const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.PORT}`)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})