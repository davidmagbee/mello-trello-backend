const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    cardName: String,
    assigneeTo: String,
    dueDate: Date,
    lastModified: Date,
    cardDescription: String,
    cardPriority: Number,
    cardColor: String,
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

const Card = mongoose.model('Card', CardSchema);

module.exports - Card;