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

describe('Testen van database connectie', function(){
    it('GET /api/testDB', function(done){
        chai.request(index)
            .get('/api/testDB')
            .end(function (err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
        })
    })
})
/*
describe('Het uitvoeren van een GET request', function(){
    it('GET /api/heineken', function(done){
        chai.request(index)
            .get('/api/')
            .end(function (err, res){
                res.should.have.satus(200);
                res.body.should.be.a('object');
                //controleer iets vanuit het object
                done();
            })
    })
});

describe('Het uitvoeren van een POST request', function(){
    it('POST /api/nieuwBier', function(done){
        chai.request(index)
            .post('/addNewBeer')
            .send({
                bier: "test bier",
                id: 66666
            })
            .end(function (err, res){
                expect(res.id).to.equal("66666");
                done();
            })
    })
})
*/