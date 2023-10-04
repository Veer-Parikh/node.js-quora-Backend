const express = require('express')
const router = express.Router();
const { register } = require('../controllers/userC')

router.post('/signup',register)

module.exports = router;
