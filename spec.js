var superagent = require('superagent')
var expect = require('expect.js')

describe('improvements', function(){
  it('posts an improvement request', function(done){
    superagent.post('http://localhost:3000/improvements/requests')
      .send({requester: 'John Smith'
        , email: 'john@rpjs.co'
        , description: 'Remove wasteland in Main St.'
      })
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(res.body.length).to.eql(1)
        expect(res.body[0]._id.length).to.eql(24)
        res.body[0]._id
        done()
      })
  })
})