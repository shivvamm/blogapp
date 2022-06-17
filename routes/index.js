var express = require('express');
var router = express.Router();
var _ = require('underscore');

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:"Shivam"});
  console.log("Map"),
  console.log(_.map([1,2,3])),
  console.log(_.map([1, 2, 3], function(num){ return num * 3; })),
  console.log("Groupby"),
  console.log(_.groupBy([1.3, 2.1, 2.4])),
  console.log(_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }))
});

// router.get('/:da',function(req, res){
//   res.render('index',{title:req.params.da});
// });
module.exports = router;
