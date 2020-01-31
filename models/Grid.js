const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const GridSchema = new Schema({
  gridName: String,
  color: String,
  gridDescription: String,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task"
    }
  ]
});

const Grid = mongoose.model("Grid", GridSchema);

module.exports = Grid;
