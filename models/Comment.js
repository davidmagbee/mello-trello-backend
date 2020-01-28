const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // username will change to a ref for User Schema post MVP
    commenterName: String,
    comment: String
})

const Comment = mongoose.model('commentSchema', commentSchema);

module.exports = Comment;