const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Friends = new Schema({
    gamertag: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Friends', Friends)