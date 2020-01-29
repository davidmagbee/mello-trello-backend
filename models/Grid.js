const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commenterName: String,
  comment: String
});

const taskSchema = new Schema({
  taskName: String,
  assignedTo: String,
  dueDate: String,
  lastModified: String,
  taskDescription: String,
  taskPriority: String,
  estimatedTime: String,
  color: String,
  comments: [commentSchema]
});

const columnSchema = new Schema({
  columnName: String,
  columnDescription: String,
  tasks: [taskSchema]
});

const gridSchema = new Schema({
  gridName: String,
  color: String,
  gridDescription: String,
  columns: [columnSchema]
});

const Grid = mongoose.model('Grid', gridSchema);

module.exports = Grid;