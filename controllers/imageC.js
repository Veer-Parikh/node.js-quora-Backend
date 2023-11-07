const Image = require('../models/image')

const uploadImage = async (req,res) => {
    try {
        const newImage = new Image({
            image:{
                data: req.file,
                contentType: "image/png"
            },
            //userid:req.user._id
        })
        try {
            await newImage.save()
            res.send("image upload successful")
        } catch (err) {
            res.send(err)
        }
    } catch (err) {
        res.send(err)
    }
}

const display = async (req,res) => {
    try {
        const images = await Image.find({},'data contentType')
        res.send(images)
    } catch(err) {
        res.send(err)
    }
}

const imagedis = async (req,res) => {
    try {
        const image = req.params.id;
        const images = await Image.findById(image)
        if(image) {
            res.json ({
                message:"image found successfully",
                data:image.data
            })
            res.contentType(images.contentType)
        } else {
            res.send("image not found")
        } 
    } catch (err) {
        res.send(err)
    }
}

module.exports = {imagedis,uploadImage,display }