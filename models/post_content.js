"use strict";

module.exports = function(sequelize, DataTypes) {

  var Post_Content = sequelize.define("Post_Content", {
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

  return Post_Content;

};
