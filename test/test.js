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
})

describe('Het uitvoeren van een POST request', function(){
    //TBA: Test that fails
    it('should POST a beer', function(done){
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
                res.body.bier.should.have.property('naam');
                res.body.bier.should.have.property('beschrijving');
                res.body.bier.should.have.property('prijs');
                res.body.bier.should.have.property('voorraad');
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Bier successvol toegevoegd');
                done();
            })
    })
})
