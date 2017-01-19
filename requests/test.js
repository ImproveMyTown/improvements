var Mocha = require('mocha')

var mocha = new Mocha();
mocha.addFile(__dirname + '/db/spec.js');
mocha.addFile(__dirname + '/api/spec.js');

mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
});