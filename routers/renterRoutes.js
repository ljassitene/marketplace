const express = require('express')
const renterController = require('./../controllers/renterController')
const authController = require('./../controllers/authController')

const router = express.Router()
router.get('/get', renterController.getItem)
router.get('/get-my-items/:owner', renterController.getMyItems)
router.post('/request-item', renterController.requestItem)
router.use(authController.protect)
router.get('/get-request/:identifier', renterController.getRequest)
router.post('/submit-item', renterController.submitItem)
router.delete('/delete-item/:id', renterController.deleteItem)
module.exports = router