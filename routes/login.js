var express = require('express');
var router = express.Router();

var modelLogin = require("../model/login")//calling file or exporting from lgin
router.get('/',function(req,res){
   modelLogin.a("unknown")
   res.render('login');
});

//Making connection to mysql
//setting up host user,name,to sql
var con = mysql.createConnection({
   host: "192.168.17.44",
   user:"root",
   password:"1234"
});




/* GET home page. */
router.get('/', function(req, res) {
   res.render('login');
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
