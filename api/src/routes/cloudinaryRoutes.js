const {Router} = require("express")
const router = Router()

const {getCarrouselImgs} = require("../controllers/cloudinaryControllers")


router.get("/carrousel",getCarrouselImgs)



module.exports=router 