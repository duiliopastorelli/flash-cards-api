var express = require('express');
var router = express.Router();

//TODO: handle the response for the "/"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
