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
    question:{
        type : schema.Types.ObjectId,
        ref : 'Question',
        required : true
    },
    upvote: [{
        type: schema.Types.ObjectId,
        ref:'Answer'
    }],
    downvote: [{
        type: schema.Types.ObjectId,
        ref:'Answer'
    }]
})

module.exports=mongoose.model('Answer',answerSchema)