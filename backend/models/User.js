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
    }
})

module.exports = mongoose.model('User', User)