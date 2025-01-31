const Task = require('../models/Task');

exports.addTask = async (req, res) => {
  const { userId, name, taskName, taskType } = req.body;
  try {
    await Task.create({ userId, name, taskName, taskType });
    res.redirect('/');
  } catch (error) {
    res.send('Error: ' + error.message);
  }
};

exports.getTasksByUser = async (req, res) => {
  const tasks = await Task.find({ userId: req.params.userId }).populate('userId');
  res.json(tasks);
};
