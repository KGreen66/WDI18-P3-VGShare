const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const mediaController = require('../controllers/media')
const gameController = require('../controllers/gamectrl')

router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/media', mediaController.index)
router.post('/api/media', mediaController.create)
router.get('/api/media/:mediaId', mediaController.show)
router.delete('/api/media/:mediaId', mediaController.delete)

router.get('/api/games', gameController.index)
router.post('/api/games', gameController.create)
router.get('/api/games/:gameId', gameController.show)
router.delete('/api/games/:gamesId', gameController.delete)

module.exports = router