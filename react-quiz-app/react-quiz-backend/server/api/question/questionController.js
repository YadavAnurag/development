const Category = require('./questionModel')

removeSomeDetails = (obj)=>{
  let modifiedCategory = {...obj._doc};
  delete modifiedCategory.__v;
  return modifiedCategory;
}

exports.params = (req, res, next, id)=>{
  Category.findById(id)
    .then((category)=>{
      if(!category){
        next(new Error(`No such category with id: ${id}`))
      }else{
        req.category = category
        next()
      }
    }, (err)=>{
      next(err)
    })
}

exports.getQuestionList = (req, res, next)=>{
  const questions= [
    {
      id: 1234,
      question: 'Which game do you like most', 
      options: [
        { id: 1, option: 'CS GO' },
        { id: 2, option: 'WW 2'},
        { id: 3, option: 'PUBG'},
        { id: 4, option: 'Cyber Hunter'}
      ]
    },
    {
      id: 2243,
      question: 'Which actress do you like most', 
      options: [
        { id: 1, option: 'Tapsee' },
        { id: 2, option: 'Disha'},
        { id: 3, option: 'Jacquiline'},
        { id: 4, option: 'Sarah'}
      ]
    },
    {
      id: 3451,
      question: 'Best time wo wake up ?', 
      options: [
        { id: 1, option: '6am' },
        { id: 2, option: '7am'},
        { id: 3, option: '8am'},
        { id: 4, option: '12am'}
      ]
    },
    {
      id: 6431,
      question: 'One of the best movie ?', 
      options: [
        { id: 1, option: 'Mulk' },
        { id: 2, option: 'Article 15'},
        { id: 3, option: 'Drive'},
        { id: 4, option: 'Pink'}
      ]
    }
  ];
  res.json({
    "msg": "get question list",
    "questions": questions
  });
  // Category.find({})
  //   .exec()
  //   .then((categories)=>{
  //     res.json(categories.map((category)=>{
  //       return removeSomeDetails(category)
  //     }))
  //   }, (err)=>{
  //     next(err)
  //   })
}

exports.postAnswersList = (req, res, next)=>{
  res.json({
    "msg": "got you answers"
  });
  // const newCategory = new Category(req.body); 
  // newCategory.save((err, saved)=>{
  //   if(err){
  //     return next(err)
  //   }else{
  //     res.json(removeSomeDetails(saved))
  //   }
  // })
}

exports.deleteQuestionList = (req, res, next)=>{
  res.json({msg: 'Currently Not working...'})
}

exports.getOneQuestion = (req, res, next)=>{
  let category = req.category
  res.json(removeSomeDetails(category))
}

exports.patchOneQuestion = ((req, res, next)=>{
  let category = req.category
  let update = req.body
  Object.assign(category, update);
  category.save((err, saved)=>{
    if(err){
      next(err)
    }else{
      res.json(removeSomeDetails(saved))
    }
  })  

})

exports.deleteOneQuestion = (req, res, next)=>{
  req.category.remove((err, removed)=>{
    if(err){
      return next(err)
    }else{
      res.json(removeSomeDetails(removed))
    }
  })
}
