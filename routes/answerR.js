const express = require('express')
const router = express.Router();
const { answer,display } = require('../controllers/answerC')

router.post('/answer',answer)
router.get('/display',display)

module.exports = router;