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

router.get("/:gId/:cId/:tId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    Column.findOne({ _id: req.params.cId }).then(column => {
      Task.findOne({ _id: req.params.tId }).then(comment => {
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

router.post("/:gId/:cId/:tId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    Column.findOne({ _id: req.params.cId }).then(column => {
      Task.findOne({ _id: req.params.tId }).then(task => {
        Comment.create(req.body)
          .then(comment => {
            task.comments.push(comment._id);
            res.json(comment);
          })
          .then(() => {
            grid.save();
            column.save();
            task.save();
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
