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

exports.getUser = function(req){
  if (process.env.NODE_ENV === 'development'){
    console.log("In development, user=ADMIN");
    return "admin"
  }else{
    return req.session.user;
  }
}

exports.encryptPass = function(pass){
  var hash = crypto.createHash("md5").update(pass).digest('hex');
}

function isAdmin(session){
  return true;
}
