const User = require('../models/user')
const bcrypt = require('bcrypt')

const signUp = function(req, res){
    const newUser = new User(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
    newUser.save((err, user)=>{
        if (err){
            res.status(400)
            return res.json({error: err.message})
        }
        return res.json(user)
    })
}

module.exports = {signUp}