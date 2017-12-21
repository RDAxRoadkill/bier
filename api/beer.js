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
                //Een array variabele
                var beers = [];
                //Alle SQL (rows) worden in de array gezet. Zo hebben we een JSON variabele
                for(var i=0;i<rows.length;i++){
                   beers.push({naam: rows[i].naam});
                }
                //De connectie wordt weer vrijgelaten. .end(); is depricated
                conn.release();

                /*
                    We sturen onze array terug als variabele.
                    Deze kan later gebruikt worden in routes.js
                */
                return callback(null, beers);
            }
        })
   })
} 

module.exports = Beer;