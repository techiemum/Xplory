const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const parksRouter = require('./routes/parkRoutes')
const authRouter = require('./routes/authRoutes')
const port = 4000
const app = express()
const dbConn = 'mongodb://localhost/out_veggin_db'

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(dbConn, 
    {
        // useNewUrlParser = true,
        // useUnifiedTopology = true,
        // useFindAndModify = false,
        // useCreateIndex: true
    },
    err => {
        if (err){
            console.log("You are not connected to the DataBase i'm afraid", err)
        }else{
            console.log("Great, you are connected to the DataBase!")
        }
    })

    app.get("/", (req, res) => {
        res.send("Hello EveryOne")
    })

    app.use("/parks", parksRouter)
    app.use("/auth", authRouter)
    app.listen(port, ()=>{console.log(`Out_Veggin server is successfully listening on port ${port}`)})