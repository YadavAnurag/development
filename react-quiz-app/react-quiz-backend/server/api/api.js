const router = require('express').Router();
const userRoutes = require('./user/userRoutes');
const questionRoutes = require('./question/questionRoutes');
const productRoutes = require('./product/productRoutes');

router.use('/user-management', userRoutes);
router.use('/question-management', questionRoutes);
router.use('/product-management', productRoutes);

module.exports = router;