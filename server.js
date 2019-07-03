const express  = require('express')
const bodyParser = require('body-parser')
const todoListRoutes = require('./routes/todoList')
const port = 8000
const app = express()

// add body parser middleware
app.use(bodyParser({ extended: true }))
app.use(todoListRoutes)

app.listen(port)
console.log(`app running at http://localhost:${port}`)