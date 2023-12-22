const express = require('express')
const {PORT}  = require('./config/serverConfig')
const categoryRoutes = require('./routes/category.routes')
const app = express()


categoryRoutes(app)  // passing app (express)

app.get('/home', (req, res)=> {
    res.send('welcome')
})


app.listen(PORT, ()=>{
    console.log('Server Started at ', PORT)
})