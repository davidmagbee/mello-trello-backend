const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const GridSchema = new Schema({
  boardName: String,
  boardDescription: String,
  boardLists: {
    type: Schema.Types.ObjectId,
    ref: 'Column'
  }
});

const Grid = mongoose.model('Grid', GridSchema);

module.exports = Grid;