const nodemailer = require('nodemailer')


const sendLogin = async (req,res) => {
    try {
        const transporter = await nodemailer.createTransport({
            host : 'smtp.ethereal.email',
            port : 587,
            auth : {
                user : 'jett.langosh@ethereal.email',
                pass : '5zXZQDyeWDUsckAf8b'
            }
        })
        let info = await transporter.sendMail({
            from: 'Welcome to Quora <breanne0@ethereal.email>' ,
            to : "parikhveer71@gmail.com",
            subject : "Welcome!",
            text : "successfully logged in!!"
        })
        console.log("check ethereal inbox");
    }
    catch(error){
        console.log(error)
    }
}

const sendReg = async (req,res) => {
    try {
        const transporter = await nodemailer.createTransport({
            host : 'smtp.ethereal.email',
            port : 587,
            auth : {
                user : 'jett.langosh@ethereal.email',
                pass : '5zXZQDyeWDUsckAf8b'
            }
        })
        let info = await transporter.sendMail({
            from: 'Welcome to Quora <breanne0@ethereal.email>' ,
            to : "parikhveer71@gmail.com",
            subject : "Registration",
            text : "Successfully Registered in"
        })
        console.log("check ethereal inbox");
    }
    catch(error){
        console.log(error)
    }
}

module.exports = { sendLogin,sendReg }