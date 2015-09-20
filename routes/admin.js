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
  console.log('m=create_post');
  var short_tag = req.body.short_tag;
  var posts = req.body.posts;
  var json_return;
  var user = authentication.getUser(req);

  if(!user){
    json_return = {error:"session or user not found"};
  }

  persistPosts(user, short_tag, posts, function(){
    console.log("persisted!");
    res.send(json_return);
  });

});

function persistPosts(user, short_tag, posts, callback){
  callback();
}

module.exports = router;
