const Category = require('./categoryModel')



removeSomeDetails = (obj)=>{
  let modifiedCategory = {...obj._doc}
  delete modifiedCategory.__v
  return modifiedCategory
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

exports.getCategoryList = (req, res, next)=>{
  Category.find({})
    .exec()
    .then((categories)=>{
      res.json(categories.map((category)=>{
        return removeSomeDetails(category)
      }))
    }, (err)=>{
      next(err)
    })
}

exports.post = (req, res, next)=>{
  const newCategory = new Category(req.body) 
  newCategory.save((err, saved)=>{
    if(err){
      return next(err)
    }else{
      res.json(removeSomeDetails(saved))
    }
  })
}

exports.deleteCategoryList = (req, res, next)=>{
  res.json({msg: 'Currently Not working...'})
}

exports.getOne = (req, res, next)=>{
  let category = req.category
  res.json(removeSomeDetails(category))
}

exports.patch = ((req, res, next)=>{
  let category = req.category
  let update = req.body
  Object.assign(category, update)
  category.save((err, saved)=>{
    if(err){
      next(err)
    }else{
      res.json(removeSomeDetails(saved))
    }
  })  

})

exports.deleteOne = (req, res, next)=>{
  req.category.remove((err, removed)=>{
    if(err){
      return next(err)
    }else{
      res.json(removeSomeDetails(removed))
    }
  })
}
