const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: String,
    assigneeTo: String,
    dueDate: Date,
    lastModified: Date,
    taskDescription: String,
    taskPriority: Number,
    estimatedTime: Number,
    color: String,
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;