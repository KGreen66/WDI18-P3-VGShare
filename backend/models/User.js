const mongoose = require('../db/connections')
const Schema = mongoose.Schema

// const Friends = new Schema({
//     gamertag: String,
//     name: String
// })

const User = new Schema({
    gamertag: String,
    name: String,
    info: String,
    media: [{
        type: Schema.Types.ObjectId,
        ref: 'Media'
    }],
    password: String,
})

module.exports = mongoose.model('User', User)