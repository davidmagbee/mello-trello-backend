const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");
const Task = require("../models/Task");
const Comment = require("../models/Comment");

// Only need Create & Read on Comments... cleanup other routes!
// router.get("/", (req, res) => {
//   Comment.find().then(comment => res.json(comment));
// });

router.get("/:gridName/:columnName/:taskName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(() => {
    Column.findOne({ columnName: req.params.columnName }).then(() => {
      Task.findOne({ taskName: req.params.taskName }).then(comment => {
        res.json(comment);
      });
    });
  });
});

// router.post("/", (req, res) => {
//   Comment.create(req.body).then(comment => {
//     res.json(comment);
//   });
// });

router.post("/:gridName/:columnName/:taskName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then((grid) => {
    Column.findOne({ columnName: req.params.columnName }).then((column) => {
      Task.findOne({ taskName: req.params.taskName }).then(() => {
        Comment.create(req.body)
          .then(comment => {
            Grid.columns.tasks.push(comment);
          })
          .then(() => {
            grid.save();
            column.save();
            res.json(comment);
          });
      });
    });
  });
});

// router.put("/:id", (req, res) => {
//   Comment.findByIdAndUpdate({ _id: req.params.id }, req.body, {
//     new: true
//   }).then(comment => {
//     comment.save();
//     res.json(column);
//   });
// });

// router.delete("/:id", (req, res) => {
//   Comment.findByIdAndRemove({ _id: req.params.id }).then(comment =>
//     res.json(comment)
//   );
// });

module.exports = router;
