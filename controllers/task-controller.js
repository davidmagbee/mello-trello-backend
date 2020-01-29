const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");
const Task = require("../models/Task");

router.get("/:gridName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(grid => {
    res.json(grid.column.tasks);
  });
});

router.post("/:gridName/:columnName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then((grid) => {
    Column.findOne({ columnName: req.params.columnName }).then((column) => {
      Task.create(req.body)
        .then(task => {
          column.tasks.push(task);
        })
        .then(() => {
          grid.save();
          column.save();
          res.json(grid);
        });
    });
  });
});

router.put("/:gridName/:columnName/:taskName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then((grid) => {
    Column.findOne({ columnName: req.params.columnName }).then((column) => {
      Task.create(req.body)
        .then(task => {
          let filter = grid.column.tasks.filter(
            arr => arr.taskName === req.params.taskName
          );
          let index = grid.column.tasks.indexOf(filter[0]);
          if (index >= 0) {
            grid.column.tasks.splice(index, 1, task);
          }
        })
        .then(() => {
          column.save(err => console.log(err));
          res.json(column);
        });
    });
  });
});

router.delete("/:gridName/:columnName/:taskName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then((grid) => {
    Column.findOne({ columnName: req.params.columnName }).then(task => {
      let filter = grid.column.tasks.filter(
        arr => arr.taskName != req.params.taskName
      );
      grid.column.tasks = filter;
      column.save();
      res.jason(task);
    });
  });
});

module.exports = router;
