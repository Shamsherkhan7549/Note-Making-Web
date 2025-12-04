const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./route/router')
const {main} = require('./configue/configue')
const dotenv = require('dotenv')
dotenv.config()
const app = express();



app.use(cors({
    origin: process.env.VITE_FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))
app.use(express.json())

// Connect to MongoDB
main()

app.use('/', router)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})