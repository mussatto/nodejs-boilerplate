var models = require('./models');

var user = models.User.findOne({where: {
  username:"admin"
}}).then(function(user){
  console.log("user:"+user.username);
});
