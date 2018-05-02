var db = require('../models');
var Task = db.Task;

let taskController = {
  index: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.render('index', {"tasks": tasks});
      });
  },
  indexApi: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.json(tasks);
      });
  },
  todo: function(req, res) {
    Task.findAll()
    .then(function(tasks) {
      res.render('todo', {"todos": tasks})
    })
  },
  createTodo: function(req, res) {
    var todo = req.body.title;
    console.log(todo)
    Task.create({"title": todo})
    .then(res.redirect('/todo'))
  }
};
module.exports = taskController;