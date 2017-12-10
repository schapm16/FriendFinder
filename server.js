var express = require('express');
var bodyParser = require('body-parser');

//Import routing modules
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

var app = express();
var PORT = process.env.PORT || 8080;

apiRoutes(app);
htmlRoutes(app);





app.listen(PORT);