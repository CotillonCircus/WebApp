const { Router,static } = require('express');
const path = require("path")
const router = Router();

const cloudinary = require("cloudinary/lib/cloudinary");


const cloud_name = "circus-corillon"
const api_key = "164947681452799"
const api_secret = "Ii4cdvwbN_kI8YNLnc0xMnAyyjw"

cloudinary.config({
            cloud_name:cloud_name,
            api_key: api_key,
            api_secret: api_secret,
            mode:"no-cors"
    });
    

const productRoutes = require("./productRoutes")
const userRoutes = require("./userRoutes")
const catalogRoutes = require("./catalogRoutes")
const authRoutes = require("./authRoutes")

router.use('/images', static(path.join(__dirname, 'images')));

router.use("/product",productRoutes)
router.use("/user",userRoutes)
router.use("/catalog",catalogRoutes)
router.use("/auth",authRoutes)

router.get("/test",async(req,res,next)=>{
    const rs= await cloudinary.v2.api.resources({type:"upload",prefix:"carrousel"})
    res.send(rs)
})


module.exports = router;
