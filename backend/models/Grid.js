// Model schema for project 3

const mongoose = require('../db/connection')

const assignedToSchema = new mongoose.Schema({
    owner: String
})

const commentSchema = new mongoose.Schema({
    commentorName: String,
    comment: String
})

const taskSchema = new mongoose.Schema({
    name: String,
    assignedTo: [assignedToSchema],
    dueDate: String,
    lastModified: { type: Date, default: Date.now},
    description: String,
    priority: {
        type: Number,
        min: 1,
        max: 5,
        default: 5        
     },
    estimatedTime: {
        type: Number,
        min: 1,
        max: 100,
        default: 1
     },    
    color: String,
    comments: [commentSchema]
})

const columnSchema = new mongoose.Schema({
    name: String,
    tasks: [taskSchema]
})

const gridSchema = new mongoose.Schema({
    color: String,
    description: String,
    name: String,
    columns: [columnSchema]
})


const Owner = mongoose.model("Owner", commentSchema)
  module.exports = Owner

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment

const Task = mongoose.model("Task", taskSchema)
module.exports = Task

const Column = mongoose.model("Column", columnSchema)
module.exports = Column

const Grid = mongoose.model("Grid", gridSchema)
module.exports = Grid
