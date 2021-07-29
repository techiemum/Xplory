const User = require('../models/user')
const bcrypt = require('bcrypt')

const signUp = function(req, res){
    const newUser = new User(req.body)
    newUser.hash_password = 
}