var express = require('express');
var router = express.Router();
var authentication = require('./authentication');
var user_create = require('../scripts/user_create');
var models = require('../models');

/* GET home page. */
router.get('/', authentication.isAuthenticated, function(req, res, next) {
  res.render('admin/index');
});

router.get('/create_default', authentication.isAuthenticated, function(req, res, next) {
  console.log("m=create_default");
  user_create.create_default_admin();
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

function persistPosts(username, short_tag, posts, callback){
    console.log("m=persistPosts,username="+username+",short_tag"+short_tag+",posts_length"+posts.length);

    var user = models.User.findOne({where: {
      username:username
    }}).then(function(user){
      persistPostAndContents(user, short_tag, posts, callback);
    });
}

function persistPostAndContents(user, short_tag, posts, callback){
  
  console.log("user:"+user.username);

  user.createPost({short_tag:short_tag}).then(function(post){
    createPostContents(post, posts, callback);
  });

  callback();
}

function createPostContents(post, posts, callback){
  for(var i=0; i<posts.length;i++){
    post.createPostContent({
      title:posts[i].title,
      content: posts[i].content,
      language: posts[i].language
    });
  }
  callback();
}
module.exports = router;
