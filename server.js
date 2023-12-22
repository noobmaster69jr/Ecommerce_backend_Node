const express = require('express')
const bodyParser = require('body-parser')
const {PORT}  = require('./config/serverConfig')
const categoryRoutes = require('./routes/category.routes')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

categoryRoutes(app)  // passing app (express)

app.get('/home', (req, res)=> {
    res.send('welcome')
})


app.listen(PORT, ()=>{
    console.log('Server Started at ', PORT)
})