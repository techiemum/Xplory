const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const parksRouter = require('./routes/parkRoutes')
const authRouter = require('./routes/authRoutes')
const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const dbConn = process.env.MONGODB_URI

mongoose.connect(dbConn, 
    {
        // useNewUrlParser = true,
        // useUnifiedTopology = true,
        // useFindAndModify = false,
        // useCreateIndex: true
    },
    err => {
        if (err){
            console.log("Sorry unfortunately you are not connected to the Database.", err)
        }else{
            console.log("Great, you are connected to the DataBase!")
        }
    })
//This is the middlewear for the authorization process
    app.use((req, res, next) => {
        console.log("headers: ",req.header.authorization)
        if(req.headers && req.headers.authorization){
            jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY, (err, decode)=>{
                if (err) {
                    req.user = undefined
                }else{
                    req.user = decode
                }
             next()
            })
        }else{
            req.user = undefined
            next()
        }
      
    })

    app.get("/", (req, res) => {
        res.send("Hello EveryOne")
    })

    app.use("/parks", parksRouter)
    app.use("/auth", authRouter)
    app.listen(port, ()=>{console.log(`Xplory server is successfully listening on port ${port}`)})