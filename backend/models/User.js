const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    gamertag: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    info: String,
    media: {
        type: Schema.Types.ObjectId,
        ref: 'Media'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'Friends'
    },
    games: {
        type: Schema.Types.ObjectId, 
        ref: 'Game'
    }
})

module.exports = mongoose.model('User', User)