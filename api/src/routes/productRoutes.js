const {Router} = require("express")
const router = Router()

const {getAllProducts,getProductsByCatalog} = require("../controllers/productControllers")


router.get("/",getAllProducts)
router.get("/catalog/:catalog",getProductsByCatalog)



module.exports=router 