const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const columnSchema = new Schema({
    columnName: String,
    columnDescription: String,
    tasks: [
        {
        type: Schema.Types.ObjectId,
        ref: "Task"
}
    ]
});

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;