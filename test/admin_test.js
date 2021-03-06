var expect = require("chai").expect;
var create_server = require("../create_server");
var superagent = require('superagent');
var status = require('http-status');
var assert = require('assert');
var models = require("../models");

var should_create = function(done){

  console.log("t=should_create");
  var short_tag = "my_test_tag";
  var post_pt_br = { title:"Meu titulo em portugues",
                  content:"meu conteudo em portugues",
                  language:"pt-br"};
  var post_eng = {title:"My title in english",
                  content:"My content in portuguese",
                  language:"en"};
  var posts = [post_pt_br, post_eng];
  var data = {short_tag:short_tag, posts:posts};

  superagent.post('http://localhost:8080/admin/create_post', data).end(function(err, res){
    assert.ifError(err);
    expect(res.status).to.be.equal(status.OK);
    //console.log(res.text);

    var posts = models.Post.findAll({
      where:{
        short_tag:short_tag
      }
    });

    expect(posts.length).to.be.equal(1);
    done();
  });
};

var should_delete = function(done){
  console.log("should delete a post");
  done();
};

var admin_functions = function(){
  var app;
  before(function(){
    models.sequelize.sync();
    app = create_server(8080);
  });

  after(function() {
    app.close();
  });

  it("should create a post", should_create);
  it("should delete a post", should_delete);
};

describe("admin", admin_functions);
