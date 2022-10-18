const {Router} = require("express");
const router = Router();


const {postOrder,getOrderByUser, getOneOrder, filteredOrders, cancelOrder, deleteOrder} = require("../controllers/orderControllers");

router.post("/",postOrder);
router.put("/:id",getOneOrder)
router.get("/user/:sub",getOrderByUser)
router.get("/",filteredOrders)
router.post("/cancel",cancelOrder)
router.delete("/delete/:id",deleteOrder)

module.exports = router;