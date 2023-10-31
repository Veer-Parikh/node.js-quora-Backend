//const string = require('@hapi/joi/lib/types/string')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken');

const addComment = async (req,res) => {
    try{
      const {comment,answer} = req.body;
      const user = req.user._id
      const newcomment = new Comment({comment,user,answer})
      //console.log("part 1")
      await newcomment.save()
      res.send("comment created")
    } catch(err) {
        res.send(err)
        console.log(err)
    }
} 

const upvote=async(req,res)=>{
  try {
      const comment =await Comment.findById(req.params.id)
      if(!comment){
          res.send("user doesn't exists")
      }
      comment.upvote.push(req.user._id)
      await comment.save()
      res.send("upvoting done")
  } catch(err) {
      res.send(err)
  }
}
const downvote=async(req,res)=>{
  try {
      const comment=await Comment.findById(req.params.id)
      if(!comment){
          res.send("user doesn't exists")
      }
      comment.downvote.push(req.user._id)
      await comment.save()
      res.send("downvoting done")
  } catch(err) {
      res.send(err)
  }
}

const printComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}


module.exports = { addComment,upvote,downvote,printComments}