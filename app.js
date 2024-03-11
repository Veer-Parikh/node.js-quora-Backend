const express = require('express')
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const {connectdb} = require('./config/db.js')

dotenv.config()

const Port = process.env.port || 4000
const url= process.env.mongo_url;

app.use(bodyParser.json());
app.use(express.json())

connectdb()
const userRouter = require('./routes/userR')
app.use('/user',userRouter)

const questionRouter = require('./routes/questionR')
app.use('/question',questionRouter)

const answerRouter = require('./routes/answerR')
app.use('/answer',answerRouter)

const commentRouter=require('./routes/commentR')  
app.use('/comment',commentRouter)

const imageRouter = require('./routes/imageR')
app.use('/images',imageRouter)

module.exports=app