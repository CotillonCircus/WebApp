const {Router} = require("express");
const router = Router();

const {postOrder,getAllOrders,getOrderByUser, getOneOrder} = require("../controllers/orderControllers");

router.post("/",postOrder);
router.get("/",getAllOrders)
router.put("/:id",getOneOrder)
router.get("/user/:sub",getOrderByUser)


module.exports = router;