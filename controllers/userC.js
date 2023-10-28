const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { sendLogin,sendReg } = require('../controllers/nodemailer')

const register = async (req,res) => {
    try{
        const newuser = new User({
            username: req.body.username,
            gmail: req.body.gmail,
            mobilee: req.body.mobilee,
            password: req.body.password
        })
        newuser.password = await bcrypt.hash(newuser.password,10)
        await newuser.save()
        .then((savedUser) => {
            console.log("saved successfully")
            res.send(savedUser)
            sendReg();
          })
          .catch((error) => {
            console.log(error)
            res.send("Error saving user")
          }) 
    }
    catch(error){
        console.log(error)
    }
}

const login = async (req,res) => {
    try{
        const { gmail, password } = req.body;
        const user = await User.findOne({gmail:gmail})
        
        if (user) {
            const validpassword = await bcrypt.compare(password,user.password)
            if (validpassword) {
                const token=jwt.sign({_id:user._id},process.env.Access_Token,{expiresIn: "3h"})
                res.json(token);
                sendLogin();
            }
            else {
                return res.send("Invalid Password");
            }
        }
        else {
            return res.send("cannot find user")
        }
    }
    catch(error){
        res.send(error)    
    }
}

module.exports = { register,login };
