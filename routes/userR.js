const express = require('express')
const router = express.Router();
const { register,login,follow,unfollow,display } = require('../controllers/userC')
const authenticatetoken = require('../authenticate/auth1')

router.post('/signup',register)
router.post('/login',login)
router.get('/display',authenticatetoken,display)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)

module.exports = router;
