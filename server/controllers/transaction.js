exports.getTransactions = (req, res, next) => {
  res.send("GET Transaction")
}

exports.addTransaction  = (req, res, next) => {
    res.send("ADD Transaction")
  }

exports.deleteTransaction  = (req, res, next) => {
res.send("DELETE Transaction")
}