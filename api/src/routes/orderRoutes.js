const {Router} = require("express");
const router = Router();

const {postOrder,getAllOrders,getOrderByUser} = require("../controllers/orderControllers");

router.post("/",postOrder);
router.get("/",getAllOrders)
router.get("/user/:sub",getOrderByUser)


module.exports = router;