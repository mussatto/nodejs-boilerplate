var express = require('express');
var router = express.Router();

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

router.get('/contato', function(req, res, next) {

  res.render('contato', {
  });
});


module.exports = router;
