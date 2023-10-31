const Question = require('../models/question')

const askQuestion = async (req,res) => {
    try{
        const question = new Question({
            questionT: req.body.questionT,
            category: req.body.category,
            user: req.user._id,
        })
        await question.save()
        .then(()=> {
            console.log("question saved successfully")
        })
        .catch((error) => {
            console.log(error)
        })
        res.send(question)
    } catch(err){
        res.send(err)
        console.log(err)
    }
}

const printQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.send(questions);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

const filterByCategory = async(req, res) => {
    filteredQuestions = await Question.find({
        category : req.body.category
    });

    filteredQuestions.forEach((question) => {
        res.send(filteredQuestions)
    });
}

const filterByUserId = async(req, res) => {
    filteredQuestions = await Question.find({
        user : req.user._id
    });

    filteredQuestions.forEach((user) => {
        res.send(filteredQuestions)
    })
}

const upvote=async(req,res)=>{
    try {
        const question =await Question.findById(req.params.id)
        if(!question){
            res.send("user doesn't exists")
        }
        question.upvote.push(req.user._id)
        await question.save()
        res.send("upvoting done")
    } catch(err) {
        res.send(err)
    }
  }
const downvote=async(req,res)=>{
    try {
        const question=await Question.findById(req.params.id)
        if(!question){
            res.send("user doesn't exists")
        }
        question.downvote.push(req.user._id)
        await question.save()
        res.send("downvoting done")
    } catch(err) {
        res.send(err)
    }
  }
module.exports = { 
    askQuestion,
    printQuestions,
    filterByCategory,
    filterByUserId,
    upvote,
    downvote
 }
    