"use strict";

module.exports = function(sequelize, DataTypes) {

  var PostContent = sequelize.define("PostContent", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    language: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //User.hasMany(models.Task)
      }
    }
  });

  return PostContent;

};
