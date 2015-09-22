"use strict";

module.exports = function(sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
    short_tag: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Post.hasMany(models.PostContent)
      }
    }
  });

  return Post;

};
