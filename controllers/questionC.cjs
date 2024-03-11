const Question = require('../models/question.cjs')

const askQuestion = async (req,res) => {
    try{
        const question = new Question({
            questionT: req.body.questionT,
            category: req.body.category,
            user: req.user._id,
        })
        const question1 = await question.save()
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
        const questions = await Question.find().populate('user');
        res.send(questions);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

const delquestion = async (req,res) => {
    try {
        const ques = await Question.findByIdAndDelete(req.body.id)
        if(ques) {
            res.send("deletion successful")
        }
        else {
            res.send("deletion unsuccessful")
        }
    } catch (err) {
        res.send(err)
    }
}

const updateques = async (req,res) => {
    try {
        const ques = await Question.findByIdAndUpdate(req.params.id,req.body,)
        if(ques) {
            res.send("updation successful")
        }
        else {
            res.send("updation unsuccessful")
        }
    } catch (err) {
        res.send(err)
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
        const quest=await Question.findById(req.params.id)
        if(!quest){
            return res.send("user doesn't exists")
        }
        const userId = req.user._id
        if(quest.upvote.includes(userId)) {
            quest.upvote.pull(userId)
        }
        else if(quest.downvote.includes(userId)) {
            quest.downvote.pull(userId)
        }
        else {
            quest.upvote.push(req.user._id)
            await quest.save()
            res.send("upvoting done")
        }
    } catch(err) {
        res.send(err)
    }
}

const downvote=async(req,res)=>{
    try {
        const quest=await Question.findById(req.params.id)
        if(!quest){
            res.send("user doesn't exists")
        }
        const userId = req.user._id
        if(quest.upvote.includes(userId)) {
            quest.upvote.pull(userId)
        }
        else if(quest.downvote.includes(userId)) {
            quest.downvote.pull(userId)
        }
        else {
            quest.downvote.push(req.user._id)
            await quest.save()
            res.send("downvoting done")
        }
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
    downvote,
    updateques,
    delquestion
 }
    