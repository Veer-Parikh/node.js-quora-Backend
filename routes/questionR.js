const express = require('express')
const router = express.Router()
const { askQuestion,printQuestions } = require('../controllers/questionC')
const authenticatetoken = require('../authenticate/auth')

router.post('/askQuestion',authenticatetoken,askQuestion)
router.get('/getQuestions',authenticatetoken,printQuestions)

module.exports = router;