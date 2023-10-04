const User = require('../models/user')

const register = async (req,res) => {
    try{
        // const newuser = new User({
        //     username: req.body.username,
        //     gmail: req.body.gmail,
        //     mobilee: req.body.mobilee,
        //     password: req.body.password
        //})
        const { username, gmail, mobilee, password } = req.body;
        const newUser = new User({
            username,
            gmail,
            mobilee,
            password,
        })
        await newUser.save()
        .then(() => {
            console.log("saved successfully")
            res.send(newUser)
          })
          .catch((error) => {
            console.log(error)
          }) 
          res.send(newUser)
    }
    catch(error){
        console.log(error)
    }
}



module.exports = { register };
