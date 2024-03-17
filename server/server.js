const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 3000
const cors = require('cors');

const connectDB = require('./db');
connectDB()

// middlewares
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const transactions  = require('./routes/transaction')
app.use('/api/v1/transactions',transactions)


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})