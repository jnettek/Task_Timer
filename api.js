
const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { application } = require('express')
require('dotenv').config()

const exp = express()

// GET METHOD to localost800 '/', call back (request,respond)
exp.get('/', (req,res) => {
    //respond json string 'hi'
res.json('hi')
})

// GET METHOD to localost800 '/', call back (request,respond)
exp.get('http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}', (req,res) => {
    //respond json string 'hi'
res.json('hi')
})


exp.listen(PORT, () => console.log(`server is running on port ${PORT}`))