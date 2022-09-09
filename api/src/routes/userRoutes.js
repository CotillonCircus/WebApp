const {Router} = require("express")
const router = Router()

const {ingress} = require("../controllers/userControllers.js")


router.post("/",ingress)



module.exports=router 