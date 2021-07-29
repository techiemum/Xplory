const express = require('express')
const parksRouter = express.Router()

const {signUp} = require('../controllers/authController')

parksRouter.post('/sign_up', signUp)
//parksRouter.post('/', newPark)

module.exports = parksRouter