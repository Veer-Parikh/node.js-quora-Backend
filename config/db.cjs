const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const app = express();

const Port = process.env.port || 4000
const url= process.env.mongo_url;

const connectdb = async() => {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to MongoDB');
        app.listen(Port, () => {
          console.log(`Server is running on port ${Port}`);
        });
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB', error);
      })
    }
  
module.exports = {connectdb}