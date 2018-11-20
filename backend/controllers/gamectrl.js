const Game = require('../models/Game')

const gameController = {
    index: (req, res) => {
        Game.find({}).populate('media')
            .then((games) => {
                console.log(games)
                res.send(games)
            })
    },
    show: (req, res) => {
        Game.findById(req.params.gameId)
            .then((game) => {
                res.send(game)
            })
    },
    delete: (req, res) => {
        Game.findByIdAndRemove(req.params.gameId)
            .then(() => {
                res.send('deleted')
            })
    },
    create: (req, res) => {
        Game.create(req.body)
            .then((game) => {
                res.send(game)
            })
    }
}

module.exports = gameController