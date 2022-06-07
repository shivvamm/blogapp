var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   res.render('login');
});

router.get('/getLogin', function(req, res) {
    console.log(req.query);
    res.send({"name":"shivam"});
 });

module.exports = router;
