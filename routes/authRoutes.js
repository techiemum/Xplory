const express = require('express')
const parksRouter = express.Router()

const {signUp, signIn} = require('../controllers/authController')

parksRouter.post('/sign_up', signUp)
parksRouter.post('/sign_in', signIn)

module.exports = parksRouter