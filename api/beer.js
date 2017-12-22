var mysql = require('../database/dbconnection');

var Beer = function(){
    idBeer = '';
    nameBeer = '';
}

//Een simpele get functie
Beer.getBeer = function (callback){
   //Onze SQL Query
   var query = "SELECT * FROM `soorten`";
   //Connectie wordt gemaakt, deze functie staat beschreven in de dbconnection file.
   mysql.connection(function (err,conn){
        if(err){
            console.log(err);
        }
        //Als er geen errors zijn. Wordt er in de opgezette connectie onze query uitgevoerd
        conn.query(query, function (err, rows){
            if(err){
                console.log(err);
            } else {
                //controleren van alle waardes in de console. --dev
                //console.log(rows);
                //De connectie wordt weer vrijgelaten. .end(); is depricated
                conn.release();
                return callback(null, rows);
            }
        })
   })
} 

Beer.addBeer = function(obj, callback){
    var query = "INSERT INTO `soorten` VALUES (NULL, ?, ?, ?, ?)";
    mysql.connection(function (err, conn) {
        if (err) {
            return callback(err);
        }
        //Al deze obj. variabele komen uit de body. Deze worden dan toegevoegd aan de database.
        conn.query(query, [obj.naam, obj.beschrijving, obj.prijs, obj.voorraad], function (err, rows) {
            if (err) {
                return callback(err,null);
            } else{
                return callback(null, rows);
            }
        });
    })
};

module.exports = Beer;