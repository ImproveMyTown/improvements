var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

var start = function () {
   this.server = app.listen(app.get('port'), function(){
     console.log('Express server listening on port', app.get('port'))
  });
}
var stop = function () {
    this.server.close();
    process.exit();
}


app.get("/", function(req, res, next) {
    return res.send("{success: true}");
});

var addMapping = function (api) {
 app[api.method](api.route, api.func);
}

module.exports = {
  app: app,
  start: start,
  stop: stop,
  addMapping: addMapping
}