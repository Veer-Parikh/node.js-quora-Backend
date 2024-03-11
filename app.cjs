const express = require('express')
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const {connectdb} = require('./config/db.cjs')
const cors = require('cors')

dotenv.config()

app.use(
    cors({
        origin:'*'
    })
)
const Port = process.env.port || 4000
const url= process.env.mongo_url;

app.use(bodyParser.json());
app.use(express.json())

connectdb()
const userRouter = require('./routes/userR.cjs')
app.use('/user',userRouter)

const questionRouter = require('./routes/questionR.cjs')
app.use('/question',questionRouter)

const answerRouter = require('./routes/answerR.cjs')
app.use('/answer',answerRouter)

const commentRouter=require('./routes/commentR.cjs')  
app.use('/comment',commentRouter)

const imageRouter = require('./routes/imageR.cjs')
app.use('/images',imageRouter)

module.exports=app