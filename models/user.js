const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    gmail:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        //validate
    },
    mobilee:{
        type: Number,
        unique: true,
        required: true,
        
    },
    password: {
        type: String,
        required:true,
        
    }
});


module.exports = mongoose.model('User', userSchema);