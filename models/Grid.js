const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  commenterName: String,
  comment: String
});

const taskSchema = new mongoose.Schema({
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

const columnSchema = new mongoose.Schema({
  columnName: String,
  columnDescription: String,
  tasks: [taskSchema]
});

const gridSchema = new mongoose.Schema({
  gridName: String,
  color: String,
  gridDescription: String,
  columns: [columnSchema]
});

const Grid = mongoose.model("Grid", gridSchema);

module.exports = Grid;
