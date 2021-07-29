const { getAllParks, addPark, getParkById, deletePark, updatePark } = require('../utils/parkUtils')

const getParks = function (req, res){
    getAllParks(req).exec((err, parks) => {
        if (err) {
            res.status(404)
            return res.json({error: err.message})
        }
        res.send(parks)
    })
}

const getPark = function (req, res){
    getParkById(req.params.id).exec((err, parks) => {
        if (err) {
            res.status(500)
            return res.json({error: err.message})
        }
        res.send(parks)
    })
}

const newPark = function (req, res){
    addPark(req).save((err, park) => {
        if (err) {
            res.status(500)
            return res.json({error: err.message})
        }
        res.send(park)
    })
}

const removePark = function(req){
    deletePark(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})   
        }
        res.sendStatus(204)
    })
}

const changePark = function(req, res){
    updatePark(req).exec((err, park)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.status(200)
        res.send(park)
    })
}

module.exports = {getParks, newPark, getPark, removePark, changePark}