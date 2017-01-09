var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/improvements', {safe:true});

var func = function(req, res, next) {
      db.collection('requests').insert(req.body, {}, function(e, results) {
        if (e) return next(e);
        res.send(results);
      });
}

module.exports = {
    method: 'post',
    route: '/improvements/requests',
    func: func
}