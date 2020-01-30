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
      Task.findOneAndUpdate({_id: req.params.tId}, req.body, {new: true}).then(task => res.json(task))
    
  
  });
});
});

router.delete("/:gId/:cId/:tId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then((grid) => {
    Column.findOne({ _id: req.params.cId }).then((column) => {
      Task.findOneAndDelete({_id: req.params.tId}).then(task => res.json(task))
      
    });
  });
});

module.exports = router;
