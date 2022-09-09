const {Router} = require("express")
const router = Router()

const {ingress,editUserStatus,getAllUsers} = require("../controllers/userControllers.js")


router.post("/",ingress)
router.put("/status",editUserStatus)
router.get("/",getAllUsers)



module.exports=router 