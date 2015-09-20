var models = require("../models");

var sync_test_case = function(){
  models.sequelize.sync().then( function(){
    console.log("Started!");
  });
};

var models_functions = function(){
  it("should sync", sync_test_case);
};

describe("Models", models_functions);
