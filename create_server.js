var app = require('./app');

var createServer = function(port) {
  return app.listen(port);
};

module.exports = createServer;
