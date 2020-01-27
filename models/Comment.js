const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    // username will change to a ref for User Schema post MVP
    username: String,
    comment: String
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports - Comment;