var http    = require('http');
var express = require('express');
var app     = require('./config/express')();
require('./config/passport')();

var config = require('./config/env.json')[process.env.NODE_ENV || 'development'];
require('./config/database.js')(config.MONGO_URI);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
