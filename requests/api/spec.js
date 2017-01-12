var api = require('./api')

describe('improvements', function(){
  it('saves a request in bd', function(done) {
     api.func({body: {}});
     done();
  });
});