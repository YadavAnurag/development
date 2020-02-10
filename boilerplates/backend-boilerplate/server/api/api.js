const router = require('express').Router()
const userRoutes = require('./user/userRoutes')
const categoryRoutes = require('./category/categoryRoutes')
const productRoutes = require('./product/productRoutes')


router.use('/user-management', userRoutes)
router.use('/category-management', categoryRoutes)
router.use('/product-management', productRoutes)



module.exports = router 