const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: String,
    assignedTo: String,
    dueDate: String,
    lastModified: String,
    taskDescription: String,
    taskPriority: Number,
    estimatedTime: Number,
    color: String,
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: "Comment"
        }
    ]
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;