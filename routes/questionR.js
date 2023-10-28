const express = require('express')
const router = express.Router()
const { askQuestion,printQuestions,filterByCategory,filterByUserId } = require('../controllers/questionC')
const authenticatetoken = require('../authenticate/auth')

router.post('/askQuestion',askQuestion)
router.get('/getQuestions',authenticatetoken,printQuestions)
router.post('/filter1',filterByCategory)
router.post('/filter2',filterByUserId)

module.exports = router;