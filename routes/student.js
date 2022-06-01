var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:"Shivam"});
});

router.get('/:da', function(req, res) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da);
    res.json({name:req.params.da});
  });


module.exports = router;
