var express = require('express')
const bodyParser = require('body-parser')
var router = express.Router()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res, next) {
  res.json({
    foo: 'bar'
  })
});

app.listen(3001, () => {
  console.log('SANCTUARY!')
})

module.exports = router;
