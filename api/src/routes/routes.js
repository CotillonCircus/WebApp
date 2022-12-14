const { Router, static } = require('express');
const path = require('path');
const router = Router();

const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const catalogRoutes = require('./catalogRoutes');
const authRoutes = require('./authRoutes');
const cloudinaryRoutes = require('./cloudinaryRoutes');
const paymentRoutes = require('./paymentRoutes');
const orderRoutes = require("./orderRoutes");

router.use('/images', static(path.join(__dirname, 'images')));

router.use('/product', productRoutes);
router.use('/user', userRoutes);
router.use('/catalog', catalogRoutes);
router.use('/auth', authRoutes);
router.use('/cloudinary', cloudinaryRoutes);
router.use('/payment', paymentRoutes);
router.use("/order",orderRoutes)

module.exports = router;
