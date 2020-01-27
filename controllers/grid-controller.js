const express = require("express");
const router = express.Router();

const Grid = require("../models/Grid");

router.get("/", (req, res) => {
  Grid.find().then(grids => res.json(grids));
});

router.post("/", (req, res) => {
  Grid.create(req.body).then(grid => {
    res.json(grid);
  });
});

router.put("/:id", (req, res) => {
  Grid.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    grid => {
      grid.save();
      res.json(grid);
    }
  );
});

router.delete("/:id", (req, res) => {
  Grid.findOneAndRemove({ _id: req.params.id }).then(grid => res.json);
});

module.exports = router;