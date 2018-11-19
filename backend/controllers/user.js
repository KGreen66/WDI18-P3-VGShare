const User = require('../models/User')
const Media = require('../models/Media')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                console.log(users)
                res.send(users)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('media')
            .then((user) => {
                res.send(user)
            })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
            .then((updatedUser) => {
                updatedUser.save()
                res.send(updatedUser)
          })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.userId)
            .then(() => {
                res.send('deleted')
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((user) => {
                res.send(user)
            })
    }
}

module.exports = userController