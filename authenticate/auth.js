const jwt = require('jsonwebtoken')
const userA = require('../models/user')

const authentication = async (req,res,next) => {
    try{
        console.log(req.headers);
        const Token = req.headers['authorization']
        res.send(Token)
        res.send("hello")
        if(!Token) {
            console.log(authTokenHead)
            return res.send("access denied!")
        } 

        // const authToken = authTokenHead.split(" ")
        // Token = authToken[1]
        console.log(Token)
        const usertoken = await jwt.verify(Token,process.env.Access_Token)
        req.userA = usertoken;
        res.send(Token)
        console.log(req.userA._id)
        next();
    }
    catch(error){
        return res.send(error)
    }
}

module.exports = authentication;