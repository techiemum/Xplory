const Park = require('../models/park')

const getAllParks = function (req){
    return Park.find()
}


const addPark = function (req){
    let date = Date.now()
    req.body.park_created = date
    req.body.park_modifed = date
    return Park(req.body)
}

const getParkById = function(id){
    return Park.findById(id)
}

const deletePark = function(id){
    return Park.findByIdAndDelete(id)
}

const updatePark = function(req){
    req.body.park_modified = Date.now() 
    return Park.findByIdAndUpdate(req.params.id, req.body, {new: true})
}

module.exports = { getAllParks, addPark, getParkById, deletePark, updatePark }