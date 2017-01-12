var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/improvements', {safe:true});

var insert = function(data, callback) {
  db.collection('requests').insert(data, {}, callback);
}

module.exports = {
    insert: insert
}