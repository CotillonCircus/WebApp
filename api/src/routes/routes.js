const { Router,static } = require('express');
const path = require("path")
const router = Router();

const productRoutes = require("./productRoutes")
const userRoutes = require("./userRoutes")
const catalogRoutes = require("./catalogRoutes")
const authRoutes = require("./authRoutes")

router.use('/images', static(path.join(__dirname, 'images')));

router.use("/product",productRoutes)
router.use("/user",userRoutes)
router.use("/catalog",catalogRoutes)
router.use("/auth",authRoutes)

module.exports = router;