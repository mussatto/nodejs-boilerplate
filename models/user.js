"use strict";
var encryptPass = require('../routes/authentication').encryptPass;

module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Post)
      }
    }
  });

  var setupAdmin = function(){
    var defaultPassword = encryptPass("mydefaultpassword");
    var defaultEmail = "my@email.com";
    User
    .findOrCreate({where: {username: 'admin'}, defaults: {password: defaultPassword,
       email:defaultEmail}})
    .spread(function(user, created) {
      console.log(user.get({
        plain: true
      }))
      console.log(created)
    });

  }
  return [User, setupAdmin];
};
