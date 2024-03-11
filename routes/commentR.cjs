const express = require('express')
const router = express.Router();
const authenticatetoken = require('../middleware/auth1.cjs')
const {addComment,upvote,downvote,printComments,delcom,updatecom} = require('../controllers/commentC.cjs')


router.post("/addcomment",authenticatetoken,addComment)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.get("/display",authenticatetoken,printComments)
router.delete('/deletecomment',authenticatetoken,delcom)
router.patch('/updatecomment/:id',authenticatetoken,updatecom)

module.exports = router;