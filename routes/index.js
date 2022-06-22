var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mysql = require('mysql');

/* GET home page. */
// router.get('/', function(req, res) {
//   // res.render('index', { title: 'Express' });
//   console.log(req);
//   // res.json({name:"Shivam"});
//   res.json({Groupby:_.groupBy(['one', 'two', 'three'], 'length'),Map:_.map([1, 2, 3], function(num){ return num * 3; })}),
//   console.log("Map"),
//   console.log(_.map([1,2,3])),
//   console.log(_.map([1, 2, 3], function(num){ return num * 3; })),
//   console.log("Groupby"),
//   console.log(_.groupBy([1.3, 2.1, 2.4])),
//   console.log(_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num)})),
//   console.log(_.groupBy(['one', 'two', 'three'], 'length'))
// });

var pool = mysql.createPool({
  connectionLimit: 10,
  host : 'easylearning.guru',
  user :  'kcc_student',
  password : 'Kccitm.edu.in1',
  database : 'kccStudent'
});

router.get('/cal',function(req, res){
  pool.getConnection(function (err,connection){
    connection.query("SELECT * FROM   RESULTS ORDER BY id",function(err,rows){
       if(err) throw err;
       else console.log(rows);
       var obj = rows;
       res.render('index',{obj});
    });
 });
 
 
});








// router.all('/cal/add',function(req, res){
//     var result=x+y;
//   // res.render('index',result);
//   console.log(result);
// });

// router.all('/cal/sub',function(req, res){
//     var resutl=x-y;
//   res.render('index',result);
// });

// router.all('/cal/mul',function(req, res){
//   var x=parseInt(req.body.num1);
//     var y=parseInt(req.body.num2);
//     var result=x*y;
    
//   res.render('index',result);
// });


router.all('/add',function(req, res){
  console.log("ADDITION");
  console.log(req.body);
  var o = "+";
  var x = parseInt(req.body.a);
  var y =parseInt(req.body.b);
  var result =x+y;
  console.log(result);
  res.json(result);
  pool.getConnection(function (err,connection){
    connection.query("INSERT INTO RESULTS (NUM1, NUM2 , OP,  RES) VALUES ('"+x+"', '"+y+"','"+o+"','"+result+"')",function(err,rows){
       connection.release();
       if(err) throw err;
       else console.log(rows.length);
    });
 });
});

router.all('/sub',function(req, res){
  console.log("SUBTRACTION");
  console.log(req.body);
  var o = "-";
  var x = parseInt(req.body.a);
  var y =parseInt(req.body.b);
  var result =x-y;
  console.log(result);
  res.json(result);
  pool.getConnection(function (err,connection){
    connection.query("INSERT INTO RESULTS (NUM1, NUM2 , OP,  RES) VALUES ('"+x+"', '"+y+"','"+o+"','"+result+"')",function(err,rows){
       connection.release();
       if(err) throw err;
       console.log(rows.length);
    });
 });
});

router.all('/mul',function(req, res){
  console.log("MULTIPLICATION");
  console.log(req.body);
  var o = "*";
  var x = parseInt(req.body.a);
  var y =parseInt(req.body.b);
  var result =x*y;
  console.log(result);
  res.json(result);
  pool.getConnection(function (err,connection){
    connection.query("INSERT INTO RESULTS (NUM1, NUM2 , OP,  RES) VALUES ('"+x+"', '"+y+"','"+o+"','"+result+"')",function(err,rows){
       connection.release();
       if(err) throw err;
       console.log(rows.length);
    });
 });

});

module.exports = router;
