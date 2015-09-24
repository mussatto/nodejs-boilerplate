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
  console.log("m=posts_json");
  models.Post.findAll({limit:10}).then(function(posts){
    var posts_json = [];
    for(var i=0; i<posts.length;i++){

      var postContent = posts[i].getPostContents();//then
      post_json={short_tag:posts[i].short_tag,
        title:postContent.title,
        title:postContent.content};
      posts_json.push(post_json);
    }
    console.log(JSON.stringify(posts_json));
    res.write("ok");
  });


});

function findPostContent(posts){
  var posts_json = [];
  for(var i=0; i<posts.length;i++){
    posts_json.push(post_json);
  }
  console.log(JSON.stringify(posts_json));
  res.write("ok");
}

router.get('/contato', function(req, res, next) {

  res.render('contato', {
  });
});


module.exports = router;
