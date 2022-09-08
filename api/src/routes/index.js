const { Router,static } = require('express');
const path = require("path")
const router = Router();

const productRoutes = require("./productRoutes")

router.use('/images', static(path.join(__dirname, 'images')));

router.use("/products",productRoutes)

module.exports = router;
