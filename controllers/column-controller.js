const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");

router.get("/:gId", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    res.json(grid.columns);
  });
});

router.post("/:gId/", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    Column.create(req.body)
      .then(column => {
        grid.columns.push(column._id);
        res.json(column);
      })
      .then(() => {
        grid.save();
      });
  });
});

router.put("/:gId/:cId/", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then((grid) => {
      Column.findOneAndUpdate({_id: req.params.cId}, req.body, {new: true}).then(column => res.json(column))
    
  
  });
});


router.delete("/:gId/:cId/", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then((grid) => {
      Column.findOneAndDelete({_id: req.params.cId}).then(column => res.json(column))
      
    });
  });


module.exports = router;
