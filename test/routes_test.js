var expect = require("chai").expect;
var create_server = require("../create_server");
var superagent = require('superagent');
var status = require('http-status');
var assert = require('assert');

var should_index = function(done){
  console.log("t=should_index");
  superagent.get('http://localhost:8080/').end(function(err, res){
    assert.ifError(err);
    expect(res.status).to.be.equal(status.OK);
    console.log("res=", res.body);
    done();
  });
};

var should_about = function(done){
  console.log("t=should_about");
  superagent.get('http://localhost:8080/sobre').end(function(err, res){
    assert.ifError(err);
    expect(res.status).to.be.equal(status.OK);
    done();
  });
};

var should_posts = function(done){
  console.log("t=should_posts");
  superagent.get('http://localhost:8080/posts').end(function(err, res){
    assert.ifError(err);
    expect(res.status).to.be.equal(status.OK);
    done();
  });
};

var should_contact = function(done){
  console.log("t=should_contact");
  superagent.get('http://localhost:8080/contato').end(function(err, res){
    assert.ifError(err);
    expect(res.status).to.be.equal(status.OK);
    done();
  });

};

var should_404 = function(done){
  console.log("t=should_404");
  superagent.get('http://localhost:8080/banananana').end(function(err, res){
    assert.ifError(err);
    //expect(res.status).to.be.equal(404);
    done();
  });
};

var routes_functions = function(){
  var app;
  before(function(){
    app = create_server(8080);
  })
  after(function() {
    app.close();
  });
  it("should show index", should_index);
  it("should show about", should_about);
  it("should show posts", should_posts);
  it("should show contact", should_contact);
  it("should show 404", should_404);
};

describe("Routes", routes_functions);
