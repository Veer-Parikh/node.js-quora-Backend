const jwt=require('jsonwebtoken')
const user = require('../models/user.cjs')

const authenticatetoken=async(req,res,next)=>{
    try {
        const authHeader= req.headers['authorization']
        const token= authHeader && authHeader.split(' ')[1]
        if(token== null){
            res.send("token null")
            return res.status(401)
        }
        const decodedToken = jwt.verify(token, process.env.Access_Token);
        req.user = decodedToken;
        next();
        
        
    } catch (error) {
        return 1
    }
}
module.exports=authenticatetoken