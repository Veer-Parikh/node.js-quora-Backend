const express = require('express')
const router = express.Router();
const { register,login } = require('../controllers/userC')
const authenticatetoken = require('../authenticate/auth')

router.post('/signup',register)
router.post('/login',login)

module.exports = router;
