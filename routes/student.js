var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/data', function(req, res) {
//   // res.render('index', { title: 'Express' });
//   console.log(req);
//   res.json({name:"Shivam"});
// });


router.post('/data', function(req, res, next) {
  console.log(req.body);//print the req
  // console.log(req.query.lname);
  console.log(req.query.lname);
  res.json({name:req.body.fname}); //send the response to the server basically a (Get request) 
//  res.render('index', { title: req.body.fname});
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
