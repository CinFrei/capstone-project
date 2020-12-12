var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://123456:${process.env.user_123456}@cluster0.gso7p.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
})

module.exports = router
