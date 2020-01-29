const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");
const Task = require("../models/Task");

router.get("/:gId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    res.json(grid.column.tasks);
  });
});

router.post("/:gId/:cId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then((grid) => {
    Column.findOne({ _id: req.params.cId }).then((column) => {
      Task.create(req.body)
        .then(task => {
          column.tasks.push(task._id)
          res.json(task)
        })
        .then(() => {
          grid.save();
          column.save();
        });
    });
  });
});

router.put("/:gId/:cId/:tId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then((grid) => {
    Column.findOne({ _id: req.params.cId }).then((column) => {
      Task.create(req.body)
        .then(task => {
          let filter = grid.column.tasks.filter(
            arr => arr.tId === req.params.tId
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

router.delete("/:gId/:cId/:tId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then((grid) => {
    Column.findOne({ _id: req.params.cId }).then(task => {
      let filter = grid.column.tasks.filter(
        arr => arr.tId != req.params.tId
      );
      grid.column.tasks = filter;
      column.save();
      res.jason(task);
    });
  });
});

module.exports = router;
