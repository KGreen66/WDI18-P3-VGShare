const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Media = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: String,
    created: Date,
    creator: String,
    game: String
})

module.exports = mongoose.model('Media', Media)