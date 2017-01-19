var requests_db = require('./db');
var expect = require('expect.js');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/improvements', {safe:true});

var request = {
    requester: 'John Smith',
    email: 'john@rpjs.co',
    description: 'Remove wasteland in Main St.'
}
//TODO: Improve readability of this test. Reference: https://mochajs.org/#getting-started
describe('requests_db', function() {
    beforeEach(function(){
        db.bind('requests');
        db.requests.drop();
    });
    it('saves a request in bd', function(done) {
        //when
        requests_db.insert(request, function(e) {
            //then
            expectOneRowInRequests(e);
            done();
        });
    });
    it('retrieves a request from bd', function(done) {
       db.requests.insert(request, function(){
           requests_db.find({_id: request._id}, function(e, new_request) {
                 expect(e).to.not.be.null;
                 expect(new_request).to.not.be.null;
                 expect(new_request.requester).to.eql('John Smith');
                 expect(new_request.email).to.eql('john@rpjs.co');
                 expect(new_request.description).to.eql('Remove wasteland in Main St.');
                 done();
              });
       });
    });
});

var expectOneRowInRequests = function(e) {
    expect(e).to.be.null;
    db.requests.find().toArray(function(e, items) {
        expect(e).to.eql(null);
        expect(items.length).to.eql(1);
    });
}