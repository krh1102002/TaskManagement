const express = require('express')
const env = require('dotenv')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')
const user = require('./routes/user')
const task = require('./routes/task')

const app = express()
env.config()

app.use(express.json())

app.use(helmet())
app.use(cors())


// Connection with Mongo Database
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected")
}).catch(() =>{
    console.log("Database connection failed")
})

app.use('/user',user)
app.use('/task',task)

app.listen(4000,()=>{
    console.log("Server is Running on PORT 4000")
})
