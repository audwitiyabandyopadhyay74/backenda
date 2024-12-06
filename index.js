const express = require('express')
    // const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.json())

a
app.get("/", (req, res) => {
    res.send("Hello i am deployed")
})

app.listen(8800, () => {
    console.log("backend is connected")
})