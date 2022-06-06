var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:"Shivam"});
});

router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:res.body.fname});
});


router.get('/:da/:ta', function(req, res) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da);
    //res.json({name:req.params.da});
    //res.json({name:req.params.da+" is from kccitm"});
//     res.json({name:req.params.da+" and "+req.params.ta+" is from kccitm"});
//   });
   var x = Number(req.params.da);
   var y = Number(req.params.ta);
   var z =x+y;
// res.json({name:req.params.da+" and "+req.params.ta+" is from kccitm"});
//   });
  res.json({
      sum:z
  });

  
});
module.exports = router;
