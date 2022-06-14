var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const a = require('../model/login');

var modelLogin = require("../model/login");//calling file or exporting from lgin
const { getLoginPost } = require('../controller/controller');
router.get('/',function(req,res){
   modelLogin("unknown")
   res.render('login');
});

//Making connection to mysql
//setting up host user,name,to sql
var con = mysql.createConnection({
   host: "192.168.17.44",
   user:"root",
   password:"1234"
});

con.connect(function(err) {
   // if (err) throw err;
   console.log("Connected!");
   console.log(a);
 });




/* GET home page. */
router.get('/', function(req, res) {
   // res.render('login');
   getLoginPost(req,res,next)
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


module.exports = router;
