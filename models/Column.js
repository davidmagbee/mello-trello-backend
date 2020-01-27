const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
    listName: String,
    cards: {
        type: Schema.Types.ObjectId,
        ref: "Card"
}
});

const Column = mongoose.model('Column', ColumnSchema);

module.exports - Column;