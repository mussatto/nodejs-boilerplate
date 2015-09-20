var app = require('./app');

var createServer = function(port) {
  console.log("Listening on..."+port);
  return app.listen(port);
};

module.exports = createServer;
