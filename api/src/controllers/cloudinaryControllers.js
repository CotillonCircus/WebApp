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

const getCarrouselImgs = async(req,res,next)=>{
    try{
        const rs= await cloudinary.v2.api.resources({type:"upload",prefix:"carrousel"})
        res.send(rs.resources)
    }catch(error){
        res.send(error.message)
    }
}

module.exports={
    getCarrouselImgs
}