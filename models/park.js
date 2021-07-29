const mongoose = require('mongoose')
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const Park = new Schema({
    title :{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    park_created: {
        type: Date,
        required: true,
    },
    park_modifed: {
        type: Date,
        required: true,
    },
})

Park.plugin(normalize)

module.exports = mongoose.model("Park", Park)