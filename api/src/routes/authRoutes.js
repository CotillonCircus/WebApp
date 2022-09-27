const {Router} = require("express");
const router = Router();

const {getAuth,postAuth,deleteAuth} = require("../controllers/authControllers");

router.get("/",getAuth);
router.post("/",postAuth);
router.delete("/",deleteAuth);

module.exports = router;