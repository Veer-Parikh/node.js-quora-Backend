const mongoose= require('mongoose')
const schema=mongoose.Schema

const questionSchema=new schema({
    questionT:{
        type : String,
        required : true,
    },
    category:{
        type : String,
        required : true
    },
    user:{
        type : schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    upvote:{
        type: schema.Types.ObjectId,
        ref:'User',default:0
    },
    downvote:{
        type: schema.Types.ObjectId,
        ref:'User',default:0
    }
})

module.exports=mongoose.model('Question',questionSchema)