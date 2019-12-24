var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.send("city name tokyo");
});
router.post('/tokyo', function(req, res, next) {
  if(req.body.name != "tokyo") {
    return res.statusCode(500);
  }
  res.send("OK");
});
router.post('/osaka', function(req, res, next) {
  if(req.body.name != "osaka") {
    return res.statusCode(500);
  }
  res.send("OK osaka");
});

module.exports = router;
