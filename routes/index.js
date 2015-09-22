var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  });
});


router.get('/sobre', function(req, res, next) {
  var content = "My boilerplate content!";
  var sobre = { title: "Sobre", content:content}

  res.render('sobre', {
    sobre:sobre
  });
});

router.get('/posts', function(req, res, next) {
  var posts = [];
  res.render('posts', {
    posts:posts
  });
});

router.get('/posts_json', function(req, res, next) {
  var posts = models.Post.findAll({limit:10});
  var posts_json = [];
  for(var i=0; i<posts.length;i++){
    var post_json = {title:posts[i].title, content:posts[i].content};
  }
});

router.get('/contato', function(req, res, next) {

  res.render('contato', {
  });
});


module.exports = router;
