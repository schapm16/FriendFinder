var path = require('path');

function apiRoutes(app) {
  app.get('/api/friends', function(req, res) {
      res.end('api');
  });

}

module.exports = apiRoutes;
