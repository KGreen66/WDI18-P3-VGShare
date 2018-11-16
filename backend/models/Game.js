const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Game = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    typeOfGame: String,
    media: [{
        type: Schema.Types.ObjectId,
        ref: 'Media'
    }]
})

module.exports = mongoose.model('Game', Game)