const { Router,static } = require('express');
const FS = require("fs")
const path = require("path")
const router = Router();

const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name:"circus-corillon",
    api_key:"164947681452799",
    api_secret:"Ii4cdvwbN_kI8YNLnc0xMnAyyjw"
})

router.use('/images', static(path.join(__dirname, 'images')));

router.get("/productos",(req,res,next)=>{
    const url="http://localhost:3001/images/"
    let images = FS.readdirSync(path.join(__dirname, '/images'))
    let productos = images.map((i)=>{

        return{
            name:i.split(".")[0],
            src:url+i
        }
    })
    res.send(productos)
})

router.post("/cloudinary",async (req,res,next)=>{
    const resul = await cloudinary.v2.uploader.upload(path.join(__dirname, '/images/a.jpg'))
    console.log(resul)
    res.send("listo")
})




module.exports = router;
