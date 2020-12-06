var express = require('express')
var router = express.Router()
const axios = require('axios')

/* GET users listing. */
router.get('/', function (req, res, next) {
  handleSubmit(req, res)
})

module.exports = router

function handleSubmit(req, res) {
  const searchBooks = req.query.q

  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}&key=${process.env.REACT_APP_API_KEY}&maxResults=2`
    )
    .then((data) => {
      res.send(data.data.items)
    })
}
