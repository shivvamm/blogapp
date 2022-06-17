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





//  con.connect();
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


 router.all('/upgateLogin', function(req, res) {
   res.render('login');
   con.query("")
  
});


module.exports = router;
