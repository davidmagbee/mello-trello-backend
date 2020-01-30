const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Task = require("../models/Task");

router.post("/:gId/", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    Task.create(req.body)
      .then(task => {
        grid.tasks.push(task._id);
        res.json(task);
      })
      .then(() => {
        grid.save();
      });
  });
});

router.put("/:gId/:tId/", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    Task.findOneAndUpdate({ _id: req.params.tId }, req.body, {
      new: true
    }).then(task => res.json(task));
  });
});

router.delete("/:gId/:tId/", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    Task.findOneAndDelete({ _id: req.params.tId }).then(task => res.json(task));
  });
});

module.exports = router;
