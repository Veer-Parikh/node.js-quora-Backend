const express = require('express')
const router = express.Router()
const { askQuestion,printQuestions,filterByCategory,filterByUserId,upvote,downvote,updateques,delquestion } = require('../controllers/questionC')
const authenticatetoken = require('../middleware/auth1.js')


router.post('/askQuestion',authenticatetoken,askQuestion)
router.get('/getQuestions',authenticatetoken,printQuestions)
router.post('/filter1',authenticatetoken,filterByCategory)
router.get('/filter2',authenticatetoken,filterByUserId)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.delete('/deletequestion',authenticatetoken,delquestion)
router.patch('/updatequestion',authenticatetoken,updateques)

module.exports = router;