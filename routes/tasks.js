var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://trickertite:tremendous0@ds147711.mlab.com:47711/my_task_list_tricker', ['tasks'])

router.get('/tasks', function(req, res, next){
  db.tasks.find(function(err, tasks){
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  })
});

module.exports = router;
