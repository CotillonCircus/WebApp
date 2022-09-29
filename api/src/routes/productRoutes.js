const {Router} = require("express")
const router = Router()

const {getAllProducts,getProductDetails,getAllToFilter, editProduct, buyProducts, createProduct, editProductsGroup} = require("../controllers/productControllers")


router.get("/",getAllProducts)
router.get("/toFilter",getAllToFilter)
router.get("/:ID",getProductDetails)
router.put("/",editProduct)
router.put("/buy",buyProducts)
router.post("/",createProduct)
router.put("/group",editProductsGroup)

module.exports=router 