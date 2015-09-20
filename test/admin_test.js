var expect = require("chai").expect;
var create_server = require("../create_server");
var superagent = require('superagent');

var should_create = function(done){
  console.log("should create a post");
  done();
};

var should_delete = function(done){
  console.log("should delete a post");
  done();
};

var admin_functions = function(){
  var app;
  before(function(){
    app = create_server(8080);
  })
  after(function() {
    app.close();
  });
  it("should create a post", should_create);
  it("should delete a post", should_delete)
};

describe("admin", admin_functions);
