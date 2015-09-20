var express = require('express');
var router = express.Router();
var authentication = require('./authentication');

/* GET home page. */
router.get('/', authentication.isAuthenticated, function(req, res, next) {
  res.render('admin/index');
});

router.get('/create_post', authentication.isAuthenticated, function(req, res, next) {
  console.log("Show crate post");
  res.render('admin/create_post');
});

router.post('/create_post',authentication.isAuthenticated, function(req, res, next){
  console.log('creating posts.....');
  var short_tag = req.body.short_tag;
  var posts = req.body.posts;
  console.log("short_tag:"+short_tag);
  console.log("posts:"+posts);

  res.render('admin/create_post');
});

module.exports = router;
