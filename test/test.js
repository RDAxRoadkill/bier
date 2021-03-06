var chai = require('chai');
var chaiHttp = require('chai-http');
var index = require('../index.js');
var chould = chai.should();

chai.use(chaiHttp);

//Een basis test, checkt of / te bereiken is.
//Faalt deze test controleer dan of de app wel aan staat
describe('Test of de app correct draait', function(){
    it('GET /api/', function(done) {
        chai.request(index)
            .get('/api/')
            .end(function (err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
        })
    })
});

//Fungeert ook als het testen van een GET functie
describe('Testen van database connectie', function(){
    it('GET /api/testDB', function(done){
        chai.request(index)
            .get('/api/testDB')
            .end(function (err, res){
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
        })
    })
});
/*
describe('Het uitvoeren van een GET/:id request', function(){
    it('GET /api/bier/:id', function(done){
        //nieuw boek toevoegen of specifiek id geven die al in db staat.
        var id = 1; //We gaan ervan uit dat id 1 altijd bestaat.
        chai.request(index)
            .get('/api/bier/' + id)
            .send(id)
            .end(function (err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.bier.should.have.property('naam');
                res.body.bier.should.have.property('beschrijving');
                res.body.bier.should.have.property('prijs');
                res.body.bier.should.have.property('voorraad');
                res.body.bier.should.have.property('id').eql(id);
        })
    })
});

describe('Het uitvoeren van een POST request', function(){
    //TBA: Test that fails
    it('zou een POST moeten uitvoeren', function(done){
        var bier = {
            naam: "Geweldig bier",
            beschrijving: "bieeer",
            prijs: 1,
            voorraad: 20
        }
        chai.request(index)
            .post('/api/bier')
            .send(bier) //je zou hier ook de variabele in kunnen zetten, maar dit is schoner
            .end(function (err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.bier.should.have.property('naam');
                res.body.bier.should.have.property('beschrijving');
                res.body.bier.should.have.property('prijs');
                res.body.bier.should.have.property('voorraad');
                res.body.should.have.property('message').eql('Bier successvol toegevoegd');
                done();
            })
    })
});
*/

describe('Het uitvoeren van een PUT request', function(){
    it('zou een UPDATE moeten uitvoeren zodra het id gegeven is', function(done){
        //Nieuw bier toevoegen, of ervan uitgan dat x bier altijd bestaat
        var id = 1;
        var updatedBier = {
            naam: "Fluit Hertog Jan",
            beschrijving: "Goed bier",
            prijs: 2.50,
            voorraad: 10
        }
        chai.request(index)
            .put('/api/bier' + id)
            .send(updatedBier)
            .end(function (err, res){
                res.should.have.status(200);
                done();
        })
        done();
    })
});
