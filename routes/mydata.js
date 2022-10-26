var express = require('express');
var router = express.Router();

/* This is my date page on render */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Divya Shree Moka' });
});

module.exports = router;
