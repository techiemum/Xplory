const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = function(req, res){
    const newUser = new User(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
    newUser.save((err, user)=>{
        if (err){
            res.status(400)
            return res.json({error: err.message})
        }
   // This is how we create a new user with the jwt in the database
        return res.json({username: user.username, jwt: jwt.sign({username: user.username, email: user.email, _id: user._id},"Thank you for using our website")})
    })
}

const signIn = function (req, res) {
    User.findOne({email: req.body.email}, (err, user)=>{
        if (err){
            res.status(400)
            return res.json({error: err.message})
        }
        if (!user || !user.comparePassword(req.body.password)){
            return res.status(400)
            return res.json({message: "Authenication has failed im afraid"})
        }
        return res.json({username: user.username, jwt: jwt.sign({username: user.username, email: user.email, _id: user._id},"Thank you for using our website")})
    })
}

module.exports = {signUp}