const Answer = require('../models/answer')

const answer = async (req,res) => {
    try{
        const ans = new Answer({
            answer: req.body.answer,
            user: req.body.user,
            questionId: req.body.questionId
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

module.exports = { answer,display }