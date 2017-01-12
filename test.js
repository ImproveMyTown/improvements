var Mocha = require('mocha'),
    requests = require('./requests'),
    service = require('./server');

service.addMapping(requests);

service.start();
var mocha = new Mocha();
mocha.addFile(__dirname + '/spec.js');

mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
  api.service.stop();
});