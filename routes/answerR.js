const express = require('express')
const router = express.Router();
const { answer,display,upvote,downvote } = require('../controllers/answerC')
const authenticatetoken = require('../authenticate/auth')

router.post('/answer',answer)
router.get('/display',authenticatetoken,display)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)

module.exports = router;