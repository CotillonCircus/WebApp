const { Router,static } = require('express');
const path = require("path")
const router = Router();

const productRoutes = require("./productRoutes")
const userRoutes = require("./userRoutes")

router.use('/images', static(path.join(__dirname, 'images')));

router.use("/products",productRoutes)
router.use("/user",userRoutes)

module.exports = router;
