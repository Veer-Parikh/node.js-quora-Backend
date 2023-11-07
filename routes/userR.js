const express = require('express')
const router = express.Router();
const { register,login,follow,unfollow,display,deluser,updateuser,uploadprofilepic } = require('../controllers/userC')
const authenticatetoken = require('../middleware/auth1')
const { upload } = require('../middleware/multer')

router.post('/signup',register)
router.post('/login',login)
router.get('/display',authenticatetoken,display)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)
router.delete('/deleteuser',authenticatetoken,deluser)
router.patch('/updateuser',authenticatetoken,updateuser)
router.post('/uploadpic',authenticatetoken,upload.single('image'),uploadprofilepic)

module.exports = router;
