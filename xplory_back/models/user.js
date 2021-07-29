const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const User = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    hash_password:{
        type: String,
        requried: true
    }
})
//This is to compare if the logged in password is the same as was given using bcrypt
User.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.hash_password)
}
module.exports = mongoose.model('User', User)