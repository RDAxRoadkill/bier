var express = require('express');
var routes = express.Router();
var mysql = require('../database/dbconnection');
var Beer = require('../api/beer');

routes.get('/', function(req, res){
    res.contentType('application/json');
    res.status(200);
    res.json({'tekst' : 'Welkom op de app'})
});

routes.get('/testDB', function(req, res){
    Beer.getBeer(function(err, items){
        if(err){ console.log(err);} 
        else {
            console.log(items);
            res.contentType('application/json'); 
            res.status(200);
            //Items komt van de functie af, hiermee tonen we de biertjes op de pagina
            //Als JSON object.
            res.json({'biertjes': items});
        }
    });
});

module.exports = routes;