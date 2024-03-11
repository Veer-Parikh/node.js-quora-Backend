const express = require('express')
const router = express.Router();
const authenticatetoken = require('../middleware/auth1')
const {addComment,upvote,downvote,printComments,delcom,updatecom} = require('../controllers/commentC')


router.post("/addcomment",authenticatetoken,addComment)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.get("/display",authenticatetoken,printComments)
router.delete('/deletecomment',authenticatetoken,delcom)
router.patch('/updatecomment/:id',authenticatetoken,updatecom)

module.exports = router;