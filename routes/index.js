const taskController = require('../controllers/taskController.js');
const defaultController = require('../controllers/defaultController.js')

module.exports = function (app) {
  app.get('/', defaultController.index);
  app.get('/tasks', taskController.index);
  app.get('/api/tasks', taskController.indexApi);
  app.post('/create', taskController.createTask);
  app.post('/delete/:id', taskController.deleteTask)
  app.post('/update/:id', taskController.updateTask)
};