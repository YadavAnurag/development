const router = require('express').Router()
const controller = require('./productController')


router.param('id', controller.params)

router.route('/products')
  .get(controller.getProductList)
  .post(controller.postProductList)
  .delete(controller.deleteProductList)

router.route('/products/:id')
  .get(controller.getOne)
  .put(controller.put)
  .patch(controller.patch)
  .delete(controller.deleteOne)



module.exports = router

