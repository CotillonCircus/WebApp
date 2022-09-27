const {Router} = require("express");
const router = Router();

const {postOrder,getAllOrders,getOrderByUser,filteredOrders} = require("../controllers/orderControllers");

router.post("/",postOrder);
router.get("/user/:sub",getOrderByUser)
router.get("/",filteredOrders)

module.exports = router;