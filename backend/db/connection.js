// Specify the backend mongodb connection string

const mongoose = require('mongoose')
mongoose.Promise = Promise
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project3'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
module.exports = mongoose