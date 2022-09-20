const {Router} = require("express")
const router = Router()

const {getAllProducts,getProductDetails,getAllToFilter, editProductStock, buyProducts, createProduct} = require("../controllers/productControllers")


router.get("/",getAllProducts)
router.get("/toFilter",getAllToFilter)
router.get("/:ID",getProductDetails)
router.put("/restock",editProductStock)
router.put("/buy",buyProducts)
router.post("/",createProduct)


module.exports=router 