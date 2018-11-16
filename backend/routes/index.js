const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/api/home', userController.index)
router.post('/api/home', userController.create)
router.get('/api/home/:userId', userController.show)
router.patch('/api/home/:userId', userController.update)
router.delete('/api/home/:userId', userController.delete)

module.exports = router