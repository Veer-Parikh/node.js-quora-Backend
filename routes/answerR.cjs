const express = require('express')
const router = express.Router();
const { answer,display,upvote,downvote,delanswer,updateanswer } = require('../controllers/answerC.cjs')
const authenticatetoken = require('../middleware/auth1.cjs')

router.post('/answer',authenticatetoken,answer)
router.get('/display',authenticatetoken,display)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.delete('/deleteanswer',authenticatetoken,delanswer)
router.patch('/updateanswer',authenticatetoken,updateanswer)

module.exports = router;