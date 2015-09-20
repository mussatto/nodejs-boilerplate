var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});

router.get('/create_post', function(req, res, next) {
  res.render('admin/create_post');
});

router.post('/create_post', function(req, res, next){
  console.log('post got');
  var data = req.body.short_tag;
  var posts = req.body.posts;

  
});

module.exports = router;
