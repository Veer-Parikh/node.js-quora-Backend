const mongoose = require('mongoose')
const schema = mongoose.Schema

const commentSchema = new schema({
    comment:[{
        type : String,
        required : true
    }],
    user:{
        type : schema.Types.ObjectId,
        ref : 'User'
    },
    question:{
        type : schema.Types.ObjectId,
        ref : 'Question'
    },
    answer:{
        type : schema.Types.ObjectId,
        ref : 'Answer'
    },
    upvote:[{
        type: schema.Types.ObjectId,
        ref:'Comment'
    }],
    downvote:[{
        type: schema.Types.ObjectId,
        ref:'Comment'
    }]
},
    { timestamps:true }
)

module.exports = mongoose.model('Comment',commentSchema)
