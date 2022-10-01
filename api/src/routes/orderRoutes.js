const {Router} = require("express");
const router = Router();


const {postOrder,getOrderByUser, getOneOrder, filteredOrders, cancelOrder} = require("../controllers/orderControllers");

router.post("/",postOrder);
router.put("/:id",getOneOrder)
router.get("/user/:sub",getOrderByUser)
router.get("/",filteredOrders)
router.post("/cancel",cancelOrder)

module.exports = router;