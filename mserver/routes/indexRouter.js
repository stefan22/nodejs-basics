var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    pageTitle: 'Home page',
    index: true
    
  
  });

});

module.exports = router;
