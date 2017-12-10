//Important npm modules
var path = require('path');

//Import data module
var friends = require('../data/friends.js');

function apiRoutes(app) {
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

}

module.exports = apiRoutes;
