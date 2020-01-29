const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");

router.get("/", (req, res) => {
  Grid.find().then(grids => res.json(grids));
});

router.get("/:gridName", (req, res) => {
  Grid.findOne({ gridName: req.params.gridName }).then(grid => {
    res.json(grid);
  });
});

router.post("/", (req, res) => {
  Grid.create(req.body).then(() => {
    Grid.find({}).then(grid => {
      res.json(grid);
    });
  });
});

router.put("/:gridName", (req, res) => {
  Grid.findByIdAndUpdate({ gridName: req.params.id }, req.body).then(() => {
    Grid.find({}).then(grid => {
      res.json(grid);
    });
  });
});

router.delete("/:gridName", (req, res) => {
  Grid.findOneAndDelete({ gridName: req.params.id }).then(() => {
    Grid.find({}).then(grid => {
      res.json(grid);
    });
  });
});

module.exports = router;
