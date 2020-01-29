const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");
const Task = require("../models/Task");

router.get("/:gridName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(grid => {
    res.json(grid.columns.tasks);
  });
});

router.post("/:gridName/:columnName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(() => {
    Column.findOne({ columnName: req.params.columnName }).then(() => {
      Task.create(req.body)
        .then(task => {
          Grid.columns.tasks.push(task);
        })
        .then(() => {
          grid.save();
          column.save();
          res.json(grid);
        });
    });
  });
});

router.put(":gridName/:columnName/:taskName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(() => {
    Column.findOne({ columnName: req.params.columnName }).then(() => {
      Task.create(req.body)
        .then(task => {
          let filter = grid.columns.tasks.filter(
            arr => arr.taskName === req.params.taskName
          );
          let index = grid.columns.tasks.indexOf(filter[0]);
          if (index >= 0) {
            grid.columns.tasks.splice(index, 1, task);
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
  Grid.findOne({ gridName: req.params.gridName }).then(() => {
    Column.findOne({ columnName: req.params.columnName }).then(task => {
      let filter = grid.columns.tasks.filter(
        arr => arr.taskName != req.params.taskName
      );
      grid.columns.tasks = filter;
      column.save();
      res.jason(task);
    });
  });
});

module.exports = router;
