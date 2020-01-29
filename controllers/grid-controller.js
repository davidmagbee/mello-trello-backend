const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");

router.get("/", (req, res) => {
  Grid.find().then(grids => res.json(grids));
});

router.get("/:id", (req, res) => {
  Grid.findOne({ _id: req.params.id }).then(grid => {
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

router.put("/:id", (req, res) => {
  Grid.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Grid.find({}).then(grid => {
      res.json(grid);
    });
  });
});

router.delete("/:id", (req, res) => {
  Grid.findOneAndDelete({ _id: req.params.id }).then(() => {
    Grid.find({}).then(grid => {
      res.json(grid);
    });
  });
});

module.exports = router;
