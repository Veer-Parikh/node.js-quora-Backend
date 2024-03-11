const express = require('express')
const router = express.Router()
const multer = require('multer')
const { uploadImage,display,imagedis } = require('../controllers/imageC.cjs')
const authenticatetoken = require('../middleware/auth1.cjs')
const upload = multer({ dest: 'uploads/'})

// const storage = multer.diskStorage()
// const upload = multer({ storage:storage })

router.post('/upload',upload.array('image'),uploadImage)
router.get('/getImages',authenticatetoken,display)
router.get('/:id',authenticatetoken,imagedis)

module.exports = router