const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 3000
const transactions  = require('./routes/transaction')

app.use('/api/v1/transaction',transactions)


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})