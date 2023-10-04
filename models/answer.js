const mongoose = require('mongoose')
const schema = mongoose.Schema

const answerSchema = new schema({
    answer:{
        type : String,
        required : true,
    },
    user:{
        type : schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    questionId:{
        type : schema.Types.ObjectId,
        ref : 'Question',
        required : true
    }
})

module.exports=mongoose.model('Answer',answerSchema)