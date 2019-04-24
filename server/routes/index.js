var express = require('express')
const bodyParser = require('body-parser')
var router = express.Router()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var carousel = []
var sanctuary = []

// how do I distinguish the two buttons' post? how do I attach the method to the button?
router.post('/', function (req, res, next) {
  carousel.push({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    picture: req.body.picture,
    thumbnail: req.body.thumbnail,
  })

  res.json(carousel)
});

router.post('/', function (req, res, next) {
  sanctuary.push({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    picture: req.body.picture,
    thumbnail: req.body.thumbnail,
  })

  res.json(sanctuary)
});


module.exports = router;
