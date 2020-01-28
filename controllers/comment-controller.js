const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

router.get("/", (req, res) => {
  Comment.find().then(comment => res.json(comment));
});

router.post("/", (req, res) => {
  Comment.create(req.body).then(comment => {
    res.json(comment);
  });
});

router.put("/:id", (req, res) => {
  Comment.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(comment => {
    comment.save();
    res.json(column);
  });
});

router.delete("/:id", (req, res) => {
  Comment.findByIdAndRemove({ _id: req.params.id }).then(comment =>
    res.json(comment)
  );
});

module.exports = router;