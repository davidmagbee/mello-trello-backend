const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: String,
    taskDescription: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;