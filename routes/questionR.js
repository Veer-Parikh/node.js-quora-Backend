const express = require('express')
const router = express.Router()
const { askQuestion,printQuestions,filterByCategory,filterByUserId,upvote,downvote } = require('../controllers/questionC')
//const authentication = require('../authenticate/auth.js')
const authenticatetoken = require('../authenticate/auth1.js')


router.post('/askQuestion',authenticatetoken,askQuestion)
router.get('/getQuestions',authenticatetoken,printQuestions)
router.post('/filter1',authenticatetoken,filterByCategory)
router.get('/filter2',authenticatetoken,filterByUserId)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)

module.exports = router;