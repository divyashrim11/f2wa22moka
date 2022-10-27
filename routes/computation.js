var express = require('express');
var router = express.Router();

var num1 = Math.random() *10;
  var num2 = Math.random() *10;
  var num3 = Math.random() *10;
  var num4 = Math.random() *10;
  var pow = Math.pow(num1);
  var sign = Math.sign(num2);
  var tanh = Math.tanh(num3);
  var trunc = Math.trunc(num4);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'Divya Shree Moka',
  num1:num1,
  num2:num2,
  num3:num3,
  num4:num4,
  pow:pow,
  sign:sign,
  tanh:tanh,
  trunc:trunc
});

});

module.exports = router;
