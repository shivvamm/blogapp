var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:"Shivam"});
});

// router.get('/:da',function(req, res){
//   res.render('index',{title:req.params.da});
// });
module.exports = router;
