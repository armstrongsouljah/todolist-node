const express  = require('express')
const bodyParser = require('body-parser')
const port = 8000
const app = express()

// add body parser middleware
app.use(bodyParser({ extended: true }))