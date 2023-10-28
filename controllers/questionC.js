const Question = require('../models/question')

const askQuestion = async (req,res) => {
    try{
        const question = new Question({
            questionT: req.body.questionT,
            category: req.body.category,
            user: req.body.user,
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
        category : req.body.category
    });

    filteredQuestions.forEach((user) => {
        res.send(filteredQuestions)
    })
}
module.exports = { 
    askQuestion,
    printQuestions,
    filterByCategory,
    filterByUserId
 }
    