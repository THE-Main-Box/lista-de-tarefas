const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  edited: {
    type: Boolean,
    defalult: false,
    required: true
  }
});

module.exports = mongoose.model('Task', taskSchema)
