var models = require("../models");
var user_create = require("../scripts/user_create");

var user_test_case = function(done){
  console.log("t=admin_test_case");
  user_create.create_default_admin(done);

  var adminUser = models.User.findOne({where: {username: "admin"}});

  console.log(adminUser.username);
}
var models_functions = function(){
  before(function(){
    console.log("syncing......");
    models.sequelize.sync();
    console.log("synchronized!");
  })

  it("should create default user", user_test_case);
};

describe("user", models_functions);
