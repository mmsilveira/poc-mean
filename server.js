var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://192.168.99.100:27017/contatooh');
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
