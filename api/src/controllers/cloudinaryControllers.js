const cloudinary = require("cloudinary/lib/cloudinary");

const {CLOUD_NAME,API_KEY,API_SECRET} = process.env
cloudinary.config({
            cloud_name:CLOUD_NAME,
            api_key: API_KEY.toString(),
            api_secret: API_SECRET,
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