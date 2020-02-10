const router = require('express').Router()
const controller = require('./categoryController')


router.param('id', controller.params)

router.route('/categories')
  .get(controller.getCategoryList)
  .post(controller.post)
  .delete(controller.deleteCategoryList)

router.route('/categories/:id')
  .get(controller.getOne)
  .patch(controller.patch)
  .delete(controller.deleteOne)

module.exports = router