var http = require('http');
var express = require ('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./api/routes');
var port = process.env.port || 3000;


var app = express();

//We gebruiken hier false, zodat raw-data verstuurd kan worden.
app.use(bodyParser.urlencoded({'extended' : 'false'}))
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

//logger
app.use(logger('dev'));

//Hier stellen we routes in (denk MVC)
//Hierdoor staan alle gets/posts etc in 1 bestand.
app.use('/api/', routes);

app.listen(port, function(){
    console.log('Server luistert op port: ' + port);
})

module.exports = app;