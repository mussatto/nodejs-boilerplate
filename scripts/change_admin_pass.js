var models = require("../models");
var crypto = require('crypto');

models.sequelize.sync().then( function(){
  console.log("Synchronized");

  change_pass("admin","defaultpass");
});


function change_pass(user, pass){

  var hash = crypto
      .createHash("md5")
      .update(pass)
      .digest('hex');

  var admin_user = models.User.update({
    password: hash,
    }, {
      where: {
        username: user
      }
    });
}
