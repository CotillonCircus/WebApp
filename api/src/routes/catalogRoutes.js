const {Router} = require("express")
const router = Router()

const {getAllCatalogs} = require("../controllers/catalogControllers")


router.get("/",getAllCatalogs)



module.exports=router 