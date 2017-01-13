var requests_db = require('./db');
var expect = require('expect.js');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/improvements', {safe:true});

var data = {
    requester: 'John Smith',
    email: 'john@rpjs.co',
    description: 'Remove wasteland in Main St.'
}

describe('requests_db', function() {
    beforeEach(function(){
        db.bind('requests');
        db.requests.drop();
    });
    it('saves a request in bd', function(done) {
        //when
        requests_db.insert(data, function(e) {
            //then
            expectOneRowInRequests(e);
            done();
     });
  });
});
//TODO: issue_3 - Create a unit test for finding requests in db

var expectOneRowInRequests = function(e) {
    expect(e).to.eql(null);
    db.requests.find().toArray(function(e, items) {
        expect(e).to.eql(null);
        expect(items.length).to.eql(1);
    });
}