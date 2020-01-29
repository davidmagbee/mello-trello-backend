const express = require("express");
const router = express.Router();

const Column = require("../models/Column");

router.get("/", (req, res) => {
  Column.find().then(columns => res.json(columns));
});

router.post("/", (req, res) => {
  Column.create(req.body).then(column => {
    res.json(column);
  });
});

router.put("/:id", (req, res) => {
  Column.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(column => {
    column.save();
    res.json(column);
  });
});

router.delete("/:id", (req, res) => {
  Column.findByIdAndRemove({ _id: req.params.id }).then(column =>
    res.json(column)
  );
});

module.exports = router;