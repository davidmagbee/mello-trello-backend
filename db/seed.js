const mongoose = require("./connection");

const Grid = require("../models/Grid");
const Column = require("../models/Column");
const Task = require("../models/Task");
const Comment = require("../models/Comment");

// clear the database of records using both models
Grid.deleteMany({}).then(() => {
  console.log("deleted all grids");
  Column.deleteMany({}).then(() => {
    console.log("deleted all columns");
    Task.deleteMany({}).then(() => {
      console.log("deleted all tasks");
      Comment.deleteMany({}).then(() => {
        console.log("deleted all comments");

        Comment.create({
          commenterName: "Mike",
          comment: "Jabberwocky"
        }).then(comment => {
          // create task and associate one with the comment
          console.log(comment);
          Task.create({
            taskName: "example Task",
            assignedTo: ["David", "Sem", "Mike", "Srikar"],
            dueDate: "1/25/2020",
            lastModified: "1/25/2020",
            taskDescription: "lorem ipsum",
            taskPriority: 5,
            estimatedTime: 40,
            color: "yellow",
            comments: comment.id
          }).then(task => {
            // create column and associate one with a task
            console.log(task);
            Column.create({
              columnName: "example Column",
              columnDescription: "column Description",
              tasks: task.id
            }).then(column => {
              // create grid and associate one with a column
              Grid.create({
                gridName: "example Column",
                color: "#123151",
                gridDescription: "column Description",
                columns: column.id
              });
            });
          });
        });
      });
    });
  });
});
