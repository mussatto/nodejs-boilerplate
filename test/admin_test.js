var expect = require("chai").expect;
var app = require("../server");
var superagent = require('superagent');

var should_create = function(){
  console.log("should create a post");
};

var should_delete = function(){
  console.log("should delete a post");
};

var admin_functions = function(){
  it("should create a post", should_create);
  it("should delete a post", should_delete)
};

describe("admin", admin_functions);
