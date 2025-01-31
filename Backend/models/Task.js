const mongoose = require('mongoose');
const User = require('../models/User');

const TaskSchema = new mongoose.Schema({
    // userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    userId: ["679c7f16cef9c9b6da13a5e3", "679cf3fc77216f20959db497", "679cf41277216f20959db499", "679cf43577216f20959db49b"],
    name: {type: String },
    taskName: String,
    taskType: { type: String, enum: ['Pending', 'Done'], default: 'Pending' },
  });
  module.exports = mongoose.model('Task', TaskSchema);
