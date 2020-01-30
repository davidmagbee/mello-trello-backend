const mongoose = require("./connection");

const Grid = require("../models/Grid");
const Task = require("../models/Task");

// clear the database of records using both models
Grid.deleteMany({}).then(() => {
  console.log("deleted all grids");
  Task.deleteMany({}).then(() => {
    console.log("deleted all tasks");
    Task.create({
      taskName: "example Task",
      taskDescription: "lorem ipsum",
    }).then(task => {
      // create column and associate one with a task
      console.log(task);
      // create grid and associate one with a column
      Grid.create({
        gridName: "example Column",
        color: "#123151",
        gridDescription: "column Description",
        tasks: task.id
      });
    });
  });
});
