var models = require("../models");
var crypto = require('crypto');

var exports = module.exports = {};

function create_user(user, pass){
  console.log("=======================");
  console.log('m=create_user');
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
      })
  .then(function(){
    console.log("=======================");
    console.log("done");
  })

  console.log("admin_user:"+admin_user);
}

models.sequelize.sync();
create_user("admin","defaultpass");
