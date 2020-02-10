const router = require('express').Router()
const controller = require('./userController')


router.param('id', controller.params)
router.route('/users/me')
  .get(controller.me)

router.route('/signup')
  .post(controller.postSignUp)

router.route('/login')
  .post(controller.postLogin)

router.route('/users')
  .get(controller.getUserList)
  .post(controller.post)
  .delete(controller.deleteUserList)

router.route('/users/:id')
  .get(controller.getOne)
  .patch(controller.patch)
  .delete(controller.deleteOne)


module.exports = router