const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");
const Column = require("../models/Column");

router.get("/:gridName", (req, res) => {
    Grid.findOne({ gridName: req.params.gridName }).then(grid => {
        res.json(grid.columns);
    });
});

router.post("/:gridName", (req, res) => {
    Grid.findOne({ gridName: req.params.gridName }).then(grid => {
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

router.put("/:gridName/:columnName", (req, res) => {
    Grid.findOne({ gridName: req.params.gridName }).then(grid => {
      Column.create(req.body)
        .then(column => {
          let filter = grid.column.filter(arr => arr.columnName === req.params.columnName);
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

router.delete("/:gridName/:commentName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(grid => {
    let filter = grid.columns.filter(arr => arr.columnName != req.params.cName);
    grid.columns = filter;
    grid.save();
    res.json(grid);
  });
});

module.exports = router;
