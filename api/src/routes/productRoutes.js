const {Router} = require("express")
const router = Router()

const {getAllProducts,getProductDetails,getAllToFilter} = require("../controllers/productControllers")


router.get("/",getAllProducts)
router.get("/toFilter",getAllToFilter)
router.get("/:ID",getProductDetails)


module.exports=router 