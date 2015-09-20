"use strict";
var exports = module.exports = {};

exports.isAuthenticated = function(req, res, next){
  console.log("checking authentication....");
  if(req.authenticated){
    console.log("Admin Logged in - "+req.connection.remoteAddress);
    return next();
  }
  console.log("ADMIN NOT ALLOWED - "+req.connection.remoteAddress);
  res.redirect("/");
}
