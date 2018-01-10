var express = require('express');
var routes = express.Router();
var mysql = require('../database/dbconnection');
var Beer = require('../api/beer');

routes.get('/', function(req, res){
    res.contentType('application/json');
    res.status(200);
    res.json({'tekst' : 'Welcome to the app'})
});

routes.get('/testDB', function(req, res){
    Beer.getBeer(function(err, items){
        if(err){ console.log(err);} 
        else {
            //console.log(items);
            res.contentType('application/json'); 
            res.status(200);
            //Items komt van de functie af, hiermee tonen we de biertjes op de pagina
            res.json(items);
        }
    });
});

routes.get('/bier/:id', function(req, res){
    var post = {id: req.params.id};
    console.log(post);
    Beer.getBeerById(post, function(err, items){
        if(err) { console.log(err); }
        else {
            res.contentType('application/json');
            res.status(200);
            res.json(items);
        }
    })
});

routes.post('/bier', function(req, res){
   var post = (req.body);
   console.log(post);
   Beer.addBeer(post, function(err, items){
       if(err){console.log(err);}
       else {
           res.contentType('application/json'); 
           res.status(200);
           res.json({message: "Bier successvol toegevoegd",
                     bier: post });
       }
   }) 
});

routes.put('/bier/:id', function(req, res){
    console.log("put functie opgevraagd");
     var post = {
                    id: req.params.id,
                    post: req.body
                 };
    console.log(post);
    Beer.updateBeer(post, function(err, items){
        if(err) {console.log(err); }
        else {
            res.contentType('application/json');
            res.status(200);
            res.json({message: "Bier successvol geupdate"});
        }
    })
})

routes.delete('/bier/:id', function(req, res){
    console.log("delete functie opgevraagd");
    var post = {id: req.params.id};
    console.log(post);
    Beer.deleteBeer(post, function(err, items){
        if(err) {console.log(err); }
        else {
            res.contentType('application/json');
            res.status(200);
            res.json({message: "Bier successvol verwijderd"});
        }
    })
})


module.exports = routes;