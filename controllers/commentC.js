//const string = require('@hapi/joi/lib/types/string')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken');

const addComment = async (req,res) => {
    try{
      const {comment,answer} = req.body;
      const user = req.user._id
      const newcomment = new Comment({comment,user,answer})
      //console.log("part 1")
      const comment1 = await newcomment.save()
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
            return res.send("user doesn't exists")
        }
        const userId = req.user._id
        if(comment.upvote.includes(userId)) {
            comment.upvote.pull(userId)
        }
        else if(comment.downvote.includes(userId)) {
            comment.downvote.pull(userId)
        }
        else {
            comment.upvote.push(req.user._id)
            await comment.save()
            res.send("upvoting done")
        }
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
        const userId = req.user._id
        if(comment.upvote.includes(userId)) {
            comment.upvote.pull(userId)
        }
        else if(comment.downvote.includes(userId)) {
            comment.downvote.pull(userId)
        }
        else {
            comment.downvote.push(req.user._id)
            await comment.save()
            res.send("downvoting done")
        }
    } catch(err) {
        res.send(err)
    }
}

const printComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('user answer');
        res.send(comments);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

const delcom = async (req,res) => {
    try {
        const com = await Comment.findByIdAndDelete(req.body.id)
        if(com) {
            res.send("deletion successful")
        }
        else {
            res.send("deletion unsuccessful")
        }
    } catch (err) {
        res.send(err)
    }
}

const updatecom = async (req,res) => {
    try {
        const com = await Comment.findByIdAndUpdate(req.params.id,req.body,)
        if(com) {
            res.send("updation successful")
        }
        else {
            res.send("updation unsuccessful")
        }
    } catch (err) {
        res.send(err)
    }
}

module.exports = { addComment,upvote,downvote,printComments,delcom,updatecom }