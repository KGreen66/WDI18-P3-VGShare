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
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }
})

module.exports = mongoose.model('Media', Media)