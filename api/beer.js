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
};

//Ophalen van specifiek bier
Beer.getBeerById = function(obj, callback){
    var query = "SELECT * FROM `soorten` WHERE id = ?";
    mysql.connection(function (err, conn) {
        if (err) { console.log(err); }
        conn.query(query, [obj.id], function (err, rows) {
            console.log(obj.id);
            if (err) {
                return callback(err,null);
            } else{
                return callback(null, rows);
            }
        });
    })
};

//Toevoegen van bier
Beer.addBeer = function(obj, callback){
    var query = "INSERT INTO `soorten` VALUES (NULL, ?, ?, ?, ?)";
    mysql.connection(function (err, conn) {
        if (err) {
             console.log(err);
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

//Updaten van bier
Beer.updateBeer = function(obj, callback){
    var query = 'UPDATE `soorten` SET `naam` = ?, `beschrijving` = ?, `prijs` = ?, `voorraad` = ? WHERE `soorten`.`id` = ?;';
    mysql.connection(function (err, conn){
        if(err) {console.log(err); }
        conn.query(query, [obj.post.naam, obj.post.beschrijving, obj.post.prijs, obj.post.voorraad, obj.id], function(err, rows){
            if (err) { return callback(err, null);  }
            else {return callback(null, rows); }
        })
    })
}

//Verwijderen van bier
Beer.deleteBeer = function(obj, callback){
    var query = 'DELETE FROM `soorten` WHERE `soorten`.`id` = ?';
    mysql.connection(function (err, conn){
        if(err) {console.log(err); }
        conn.query(query, [obj.id], function(err, rows){
            if (err) { return callback(err, null);  }
            else {return callback(null, rows); }
        })
    })
}

module.exports = Beer;