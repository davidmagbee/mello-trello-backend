const mongoose = require("./connection");

const Grid = require("../models/Grid");
const data = require("./dev-seed.json");

Grid.deleteMany({}).then(() => {
  Grid.collection
    .insert(data)
    .then(grids => {
      console.log(grids);
    })
    .catch(err => {
      console.log(err);
    });
});