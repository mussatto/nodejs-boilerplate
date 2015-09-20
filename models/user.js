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
  
  return User;
};
