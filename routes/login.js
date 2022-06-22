var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const a = require('../model/login');
var session = require('express-session')
var map = require('underscore/cjs/map.js');
var _ = require('underscore');

var modelLogin = require("../model/login");//calling file or exporting from lgin
const { getLoginPost } = require('../controller/controller');
// router.get('/',function(req,res){
//    modelLogin("unknown")
//    res.render('login');

// });

//Making connection to mysql
//setting up host user,name,to sql
var con = mysql.createConnection({
   host: "easylearning.guru",
   user: "kcc_student",
   password: "Kccitm.edu.in1",
   database: " kccStudent"
 });






/* GET home page. */
router.get('/', function(req, res) {
     res.render('login');
   con.connect(function (err) {
      if (err) console.log("err");
      else console.log("Connected!");
     
      
   });
});




// router.get('/getLogin', function(req, res) {
//     console.log(req.query);
//     // res.send({"name":"shivam"});
//     res.json({"EMAIL":req.query.email,"PASS":req.query.password});
//  });

router.post('/getLogin', function(req, res) {
    console.log(req.query);
    // res.send({"name":"shivam"});
    x=req.body.email;
    y=req.body.password;
    res.json({"EMAIL":req.body.email,"PASS":req.body.password,"Concatinated String":x+" and "+y});
    
 });


var pool = mysql.createPool({
   connectionLimit: 100000,
   host : 'easylearning.guru',
   user :  'kcc_student',
   password : 'Kccitm.edu.in1',
   database : 'kccStudent'
});

router.get('/read', function(req, res) {
   pool.getConnection(function (err,connection){
      connection.query("SELECT * FROM SHIVAMP",function(err,rows){
         connection.release();
         if(err) throw err;
         console.log(rows.length);
         res.send(JSON.stringify(rows));
      });
   });
  
});


router.all('/insert', function(req, res) {
  var sql = "INSERT INTO `SHIVAMP` (`lname`, `fname`) \
  VALUES ('"+req.body.lname+"','"+req.body.fname+"');"
  console.log(sql)
  con.connect(
     con.query(sql,function(err,result){
        console.log(result);
     })
  )
  
});


 router.all('/upgateLogin', function(req, res) {
   res.render('login');
   con.query("")
  
});


module.exports = router;
