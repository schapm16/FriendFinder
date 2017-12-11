//Important npm modules
var path = require('path');

//Import data and logic module
var friends = require('../data/friends.js');
var logic = require('../data/logic.js'); //Used to find user's friend match

function apiRoutes(app) {
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });
  
  app.post('/api/friends', function(req, res) {
    
    var match = logic(req.body);
    
    res.status(200).send(match);
  });

}

module.exports = apiRoutes;
