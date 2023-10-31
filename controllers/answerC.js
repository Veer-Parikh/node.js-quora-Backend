const Answer = require('../models/answer')

const answer = async (req,res) => {
    try{
        const ans = new Answer({
            answer: req.body.answer,
            user: req.user._id,
            question: req.body.question
        })
        await ans.save()
        .then(() => {
            console.log("answer saved successfully")
        })
        .catch((error) => {
            console.log(error)
        })
        res.send(ans)
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
}

const display = async (req,res) => {
    try{
        answers = await Answer.find();
        res.send(answers);
} catch (error) {
    console.error(error);
    res.json(error);
}
}

const upvote=async(req,res)=>{
    try {
        const answer=await Answer.findById(req.params.id)
        if(!answer){
            return res.send("user doesn't exists")
        }
        answer.upvote.push(req.user._id)
        await answer.save()
        res.send("upvoting done")
    } catch(err) {
        res.send(err)
    }
}
const downvote=async(req,res)=>{
    try {
        const answer=await Answer.findById(req.params.id)
        if(!answer){
            res.send("user doesn't exists")
        }
        answer.downvote.push(req.user._id)
        await answer.save()
        res.send("downvoting done")
    } catch(err) {
        res.send(err)
    }
}

module.exports = { answer,display,downvote,upvote }