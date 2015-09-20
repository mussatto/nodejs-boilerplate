var expect = require("chai").expect;
var app = require("../server");
var superagent = require('superagent');
var status = require('http-status');

var should_index = function(){
  superagent.get('http://localhost:8080/').end(function(err, res){
    assert.ifError(err);
    assert.equal(res.status, status.OK);
    done();
  });
};

var should_about = function(){
  superagent.get('http://localhost:8080/sobre').end(function(err, res){
    assert.ifError(err);
    assert.equal(res.status, status.OK);
    done();
  });
};

var should_posts = function(){
  superagent.get('http://localhost:8080/posts').end(function(err, res){
    assert.ifError(err);
    assert.equal(res.status, status.OK);
    done();
  });
};

var should_contact = function(){
  superagent.get('http://localhost:8080/contato').end(function(err, res){
    assert.ifError(err);
    assert.equal(res.status, status.OK);
    done();
  });
};

var routes_functions = function(){
  it("should show index", should_index);
  it("should show about", should_about);
  it("should show posts", should_posts);
  it("should show contact", should_contact);
};

describe("Routes", routes_functions);
