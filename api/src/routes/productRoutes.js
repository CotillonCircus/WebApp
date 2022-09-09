const {Router} = require("express")
const router = Router()

const {getAllProducts,getProductDetails} = require("../controllers/productControllers")


router.get("/",getAllProducts)
router.get("/:ID",getProductDetails)



module.exports=router 