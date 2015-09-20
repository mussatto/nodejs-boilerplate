"use strict";
var exports = module.exports = {};

exports.isAuthenticated = function(req, res, next){
  if (process.env.NODE_ENV === 'development'){
    console.log("In development, skipping authentication.");
    return next();
  }
  console.log("checking authentication....");
  if(isAdmin(req.session)){
    console.log("Admin Logged in - "+req.connection.remoteAddress);
    return next();
  }
  console.log("ADMIN NOT ALLOWED - "+req.connection.remoteAddress);
  res.redirect("/");
}

function isAdmin(session){
  return true;
}
