const mongoose = require("./connection");

const Grid = require("../models/Grid");
const Task = require("../models/Task");

Grid.deleteMany({}).then(() => {
  Task.deleteMany({}).then(() => {
    Task.create({
      taskName: "Scoring functionality",
      taskDescription: "Score whether the user's guess is correct or not."
    }).then(task => {
      Grid.create({
        gridName: "Python Project",
        color: "#123151",
        gridDescription: "Build a simple game using Python",
        tasks: task.id
      });
    });
  });
});