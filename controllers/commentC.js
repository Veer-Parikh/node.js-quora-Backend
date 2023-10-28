//const string = require('@hapi/joi/lib/types/string')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken');

const addComment = async (req,res) => {
    try{
      const {comment,answer,user} = req.body;
      //const user = req.user._id
      const newcomment = new Comment({comment,user,answer})
      console.log("part 1")
      await newcomment.save()
      res.send("comment created")
    } catch(err) {
        res.send(err)
        console.log(err)
    }
} 

module.exports = { addComment }