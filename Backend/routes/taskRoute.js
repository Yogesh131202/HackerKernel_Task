const express = require('express');

const routerTask = express.Router();
const taskController = require('../controllers/taskController');

routerTask.post('/add-task', taskController.addTask);
routerTask.get('/tasks/:userId', taskController.getTasksByUser);

module.exports = routerTask;