const router = require('express').Router();
const controller = require('./questionController');


router.param('id', controller.params)

router.route('/questions')
  .get(controller.getQuestionList)
  .post(controller.postAnswersList)
  .delete(controller.deleteQuestionList);

router.route('/questions/:id')
  .get(controller.getOneQuestion)
  .patch(controller.patchOneQuestion)
  .delete(controller.deleteOneQuestion);

module.exports = router;