const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
})

module.exports = mongoose.model('Image',imageSchema)