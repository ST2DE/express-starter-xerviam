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
  createTask: function(req, res) {
    var newTask = req.body.title
    Task.create({
      "title": newTask,
    }).then(res.redirect('/'))
  },
  deleteTask: function(req, res) {
    var id = req.params.id;
    Task.findById(id).then(task => {
      task.destroy()
    })
  },
  updateTask: function(req, res) {
    var id = req.params.id;
    var newTask = req.body.title;
    Task.findById(id).then(task => {
      task.update({
        title: newTask
      }).then(() => {
        res.status(204).send()
      })
    })
  }

};
module.exports = taskController;