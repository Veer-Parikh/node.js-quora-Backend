const express = require('express')
const router = express.Router();
const { answer,display,upvote,downvote,delanswer,updateanswer } = require('../controllers/answerC')
const authenticatetoken = require('../middleware/auth1')

router.post('/answer',authenticatetoken,answer)
router.get('/display',authenticatetoken,display)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.delete('/deleteanswer',authenticatetoken,delanswer)
router.patch('/updateanswer',authenticatetoken,updateanswer)

module.exports = router;