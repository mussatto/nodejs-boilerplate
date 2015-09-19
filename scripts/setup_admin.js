var models = require("../models");
var crypto = require('crypto');

models.sequelize.sync().then( function(){
  console.log("Synchronized");

  create_admin("admin","defaultpass");
});


function create_admin(user, pass){

  var hash = crypto
      .createHash("md5")
      .update(pass)
      .digest('hex');

  var admin_user = models.User
  .findOrCreate({where: {username: user}, defaults: {password: hash}})
  .spread(function(user, created) {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  });
}
