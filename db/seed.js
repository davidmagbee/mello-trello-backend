const mongoose = require("./connection");

const Grid = require("./models/Grid");
const Column = require("./models/Column")
const Task = require("./models/Task")
const Comment = require("./models/Comment")

// clear the database of records using both models
Grid.deleteMany({}).then(() => {
  console.log("deleted all grids")
  Column.deleteMany({}).then(() => {
    console.log("deleted all columns")
    Task.deleteMany({}).then(() => {
        console.log("deleted all tasks")
        Comment.deleteMany({}).then(() => {
            console.log("deleted all comments")

Grid.create({
    gridName: "example board",
    color: "#123151",
    girdDescription: "lorem ipsum"
    }).then(example => {
    // create column and associate one with the grid
    Column.create({
        columnName: "Project 1",
        columnDescription: "Project 1 of SEIR",
        tasks: example.id
    }).then(project => {
        // we have to call save() or the push() never writes to the database
        example.favorites.push(project);
        example.save();
        console.log("created example board: Project 1")
    }).then(project => {
        // create task and associate one with a column
        Task.create({
            taskName: "example Task",
            assignedTo: ["David", "Sem", "Mike", "Srikar"],
            dueDate: "1/25/2020",
            lastModified: "1/25/2020",
            taskDescription: "lorem ipsum",
            taskPriority: 5,
            estimatedTime: 40,
            color: "yellow",
            tasks: example.id
        }).then(project => {
            // we have to call save() or the push() never writes to the database
            example.favorites.push(project);
            example.save();
            console.log("created example board: Project 1")

        })
    })
  })  
})