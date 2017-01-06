var Mocha = require('mocha'),
    api = require('./api.js'),
    service = require('../server/service.js');

service.addMapping(api);
service.start();
var mocha = new Mocha();
mocha.addFile(__dirname + '/spec.js');

mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
  api.service.stop();
});