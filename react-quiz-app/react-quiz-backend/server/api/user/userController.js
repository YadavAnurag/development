const User = require('./userModel');

removePassword = (obj)=>{
  let modifiedUser = {...obj._doc}
  delete modifiedUser.password
  delete modifiedUser.__v
  return modifiedUser
}


exports.params = (req, res, next, id)=>{
  User.findById(id)
    .then((user)=>{
      if(!user){
        next(new Error(`No such user with id: ${id}`))
      }else{
        req.user = user
        next()
      }
    }, (err)=>{
      next(err)
    })
}

exports.postSignUp = (req, res, next)=>{
  let newUser = req.body
  res.json({
    'msg': 'userAdded',
    'newUser': newUser
  })
}
exports.postLogin = (req, res, next)=>{
  let newUser = req.body
  res.json({
    'msg': 'user logged in successfully',
  })
}
exports.getQuestions = (req, res, next)=>{
  res.json({
    "msg": "get questions"
  });
}
exports.postAnswers = (req, res, next)=>{
  console.log(req.body);
  res.json({
    "msg": "got answers"
  });
}

exports.getUserList = (req, res, next)=>{
  User.find({})
    .exec()
    .then((users)=>{
      res.json(users.map((user)=>{
        return removePassword(user)
      }))
    }, (err)=>{
      next(err)
    })
}
exports.post = (req, res, next)=>{
  const newUser = new User(req.body) 
  newUser.save((err, saved)=>{
    if(err){
      return next(err)
    }else{
      res.json(removePassword(saved))
    }
  })
}
exports.deleteUserList = (req, res, next)=>{
  res.json('Not working')
}


exports.getOne = (req, res, next)=>{
  let user = req.user
  res.json(removePassword(user))
}
exports.patch = ((req, res, next)=>{
  let user = req.user
  let update = req.body
  Object.assign(user, update)
  user.save((err, saved)=>{
    if(err){
      next(err)
    }else{
      res.json(removePassword(saved))
    }
  })  

})

exports.deleteOne = (req, res, next)=>{
  req.user.remove((err, removed)=>{
    if(err){
      return next(err)
    }else{
      res.json(removePassword(removed))
    }
  })
}

exports.me = (req, res)=>{
  const email = req.body.email
  User.find({
    email: email
  }).exec()
    .then((user)=>{
      if(!user){
        res.json(new Error(`No such user`))
      }else{
        res.json(removePassword(user))
      }
    })
}

