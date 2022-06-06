var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/postreq', function(req, res) {
    // res.render('index', { title: 'Express' });
    console.log(req);
    res.json({fname:"fname"});
});
module.exports = router;
