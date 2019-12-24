var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const mypool  = mysql.createPool({
  connectionLimit : 5,
  host: "localhost",
  user: "root",
  password: "",
  database: "nodexample",
  port: 3306
//   insecureAuth: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.send("city name tokyo");
});
router.get('/yokohama', function(req, res, next) {
  mypool.getConnection(function(err, conn) {
    if(err){
      return res.status(500).end();
    }
    if(conn){
        var sql = "SELECT * FROM city_master";
        conn.query(sql, [], function (err, rows, fields){
            conn.release();
            if(err){
                console.log(err);
                return res.status(500).end();
            }
            if(rows){
              res.send(rows[0].name);
            }
        })        
    }
});      
});
router.post('/tokyo', function(req, res, next) {
  if(req.body.name != "tokyo") {
    return res.status(500).end();
  }
  res.send("OK");
});
router.post('/osaka', function(req, res, next) {
  if(req.body.name != "osaka") {
    return res.status(500).end();
  }
  res.send("OK osaka");
});

module.exports = router;
