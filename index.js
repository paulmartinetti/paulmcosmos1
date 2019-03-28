const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const env = require('dotenv').config()

mongoose.connect(process.env.COSMOSDB_CONNSTR + "?ssl=true&replicaSet=globaldb", {
    auth: {
        user: process.env.COSMODDB_USER,
        password: process.env.COSMOSDB_PASSWORD
    }
})
    .then(() => console.log('Connection to CosmosDB successful'))
    .catch((err) => console.error(err))

// main
const app = express()

// views using path
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

// parse form data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// route
const home = require('./routes/home')
app.use('/', home)

// catch all route
app.use((err, req, res, next)=>{
    res.render('error from index.js', {message: err})
})

let port = process.env.PORT || 5000
app.listen(port)

// to see port in verbose azure logs
const logPartion = 'oooooooooooooooooooooooooooooooooooooooooooooooooooooo'
console.log(`${logPartion}


app running on port ${port}


${logPartion}`)