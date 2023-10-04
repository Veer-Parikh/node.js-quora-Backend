const express = require('express')
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv=require('dotenv').config()

const Port = process.env.port || 4000
const url= process.env.mongo_url;

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://veer_parikh:Veer26112004@cluster2.vnavi7d.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  })

  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

const userRouter = require('./routes/userR')
app.use('/user',userRouter)

const questionRouter = require('./routes/questionR')
app.use('/question',questionRouter)

const answerRouter = require('./routes/answerR')
app.use('/answer',answerRouter)






