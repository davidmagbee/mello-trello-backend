const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");

router.get("/:gId", (req, res) => {
    Grid.findOne({ _id: req.params.gId }).then(grid => {
        res.json(grid.columns);
    });
});

router.post("/:gId", (req, res) => {
    Grid.findOne({ _id: req.params.gId }).then(grid => {
      Column.create(req.body)
        .then(column => {
          grid.columns.push(column);
        })
        .then(() => {
          grid.save();
          res.json(grid);
        });
    });
  });

router.put("/:gId/:cId", (req, res) => {
    Grid.findOne({ _id: req.params.gId }).then(grid => {
      Column.create(req.body)
        .then(column => {
          let filter = grid.column.filter(arr => arr.cId === req.params.cId);
          let index = grid.column.indexOf(filter[0]);
          if (index >= 0) {
            grid.column.splice(index, 1, column);
          }
        })
        .then(() => {
          grid.save(err => console.log(err));
          res.json(grid);
        });
    });
  });

router.delete("/:gId/:cName", (req, res) => {
  Grid.findOne({ _id: req.params.gId }).then(grid => {
    let filter = grid.columns.filter(arr => arr.cId != req.params.cName);
    grid.columns = filter;
    grid.save();
    res.json(grid);
  });
});

module.exports = router;
