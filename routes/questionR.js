const express = require('express')
const router = express.Router()
const { askQuestion,printQuestions } = require('../controllers/questionC')

router.post('/askQuestion',askQuestion)
router.get('/getQuestions',printQuestions)

module.exports = router;