var express = require('express');
var bodyParser = require('body-parser');

//Import routing modules
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

//Apply middleware
app.use(bodyParser.urlEncoded({extended: false}));
app.use(bodyParser.json());

var app = express();
var PORT = process.env.PORT || 8080;

apiRoutes(app);
htmlRoutes(app);


app.listen(PORT);