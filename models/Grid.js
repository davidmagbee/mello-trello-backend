const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const GridSchema = new Schema({
  gridName: String,
  color: String,
  gridDescription: String,
  columns: {
    type: Schema.Types.ObjectId,
    ref: 'Column'
  }
});

const Grid = mongoose.model('Grid', GridSchema);

module.exports = Grid;