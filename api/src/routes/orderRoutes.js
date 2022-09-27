const {Router} = require("express");
const router = Router();


const {postOrder,getOrderByUser, getOneOrder, filteredOrders} = require("../controllers/orderControllers");

router.post("/",postOrder);
router.put("/:id",getOneOrder)
router.get("/user/:sub",getOrderByUser)
router.get("/",filteredOrders)

module.exports = router;