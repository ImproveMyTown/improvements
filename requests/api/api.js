var db = require('../db');

var func = function(req, res, next) {
      db.insert(req.body, function(e, results) {
        if (e) return next(e);
        res.send(results);
      });
}

module.exports = {
    method: 'post',
    route: '/improvements/requests',
    func: func
}