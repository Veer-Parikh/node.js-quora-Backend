const express = require('express')
const router = express.Router();
const { answer,display,upvote,downvote } = require('../controllers/answerC')
//const authentication = require('../authenticate/auth')
const authenticatetoken = require('../authenticate/auth1')

router.post('/answer',authenticatetoken,answer)
router.get('/display',authenticatetoken,display)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)

module.exports = router;