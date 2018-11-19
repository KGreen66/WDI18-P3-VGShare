const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Media = new Schema({
    title: String,
    url: String,
    description: String,
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