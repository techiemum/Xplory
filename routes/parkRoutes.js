const express = require('express')
const parksRouter = express.Router()

const {getParks, newPark, getPark, removePark, changePark} = require('../controllers/parkController')

parksRouter.get('/', getParks)
parksRouter.post('/', newPark)

parksRouter.get('/:id', getPark)

parksRouter.delete('/:id', removePark)

parksRouter.put('/:id', changePark)

module.exports = parksRouter