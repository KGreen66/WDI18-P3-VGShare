const Media = require('../models/Media')

const mediaController = {
    index: (req, res) => {
        Media.find({})
            .then((medias) => {
                console.log(medias)
                res.send(medias)
            })
    },
    show: (req, res) => {
        Media.findById(req.params.mediaId)
            .then((media) => {
                res.send(media)
            })
    },
    update: (req, res) => {
        Media.findByIdAndUpdate(req.params.mediaId, req.body, {new: true})
            .then((updatedMedia) => {
                updatedMedia.save()
                res.send(updatedMedia)
          })
    },
    delete: (req, res) => {
        Media.findByIdAndRemove(req.params.mediaId)
            .then(() => {
                res.send('deleted')
            })
    },
    create: (req, res) => {
        Media.create(req.body)
            .then((media) => {
                res.send(media)
            })
    }
}

module.exports = mediaController