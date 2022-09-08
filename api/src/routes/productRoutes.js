const {Router} = require("express")
const router = Router()

const {getAllProducts,getProductsByCatalog} = require("../controllers/productControllers")


router.get("/",getAllProducts)



module.exports=router 