var db = require('../models');
var Task = db.Task;

let defaultController = {
    index: function (req, res) {
        Task.findAll()
            .then(function (tasks) {
                res.render('index', { "tasks": tasks });
            });
    }
};
module.exports = defaultController;