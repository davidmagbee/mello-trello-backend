const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

router.get("/", (req, res) => {
  Task.find().then(task => res.json(task));
});

router.post("/", (req, res) => {
  Task.create(req.body).then(task => {
    res.json(task);
  });
});

router.put("/:id", (req, res) => {
  Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(task => {
    task.save();
    res.json(task);
  });
});

router.delete("/:id", (req, res) => {
  Task.findByIdAndRemove({ _id: req.params.id }).then(task =>
    res.json(task)
  );
});

module.exports = router;