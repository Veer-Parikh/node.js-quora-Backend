const express = require('express')
const router = express.Router();
const authenticatetoken = require('../authenticate/auth')
const {addComment} = require('../controllers/commentC')

router.post("/addcomment",addComment)

module.exports = router;