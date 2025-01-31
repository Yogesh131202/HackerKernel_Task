const xlsx = require('xlsx');
const fs = require('fs');
const User = require('../models/User');
const Task = require('../models/Task');
const filePath = './exports/data.xlsx';

exports.exportData = async (req, res) => {
    const users = await User.find();
    const tasks = await Task.find().populate('userId');
  
    const userSheet = users.map(user => ({
      ID: user._id,
      Name: user.name,
      Email: user.email,
      Mobile: user.mobile,
    }));
  
    const taskSheet = tasks.map(task => ({
      Task: task.taskName,
      Status: task.taskType,
      AssignedTo: task.name,
    }));
  
    const wb = xlsx.utils.book_new();
    const wsUsers = xlsx.utils.json_to_sheet(userSheet);
    const wsTasks = xlsx.utils.json_to_sheet(taskSheet);
    
    xlsx.utils.book_append_sheet(wb, wsUsers, 'Users');
    xlsx.utils.book_append_sheet(wb, wsTasks, 'Tasks');
    

    xlsx.writeFile(wb, filePath);
    res.download(filePath, () => fs.unlinkSync(filePath));
  };
  