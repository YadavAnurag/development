exports.params = (req, res, next, id)=>{
  next()
}

exports.getProductList = (req, res, next)=>{
  res.json({'msg': 'get list of products'})
}
exports.postProductList = (req, res, next)=>{
  res.json({'msg': 'post list of products'})
}
exports.deleteProductList = (req, res, next)=>{
  res.json({'msg': 'delete list of products'})
}

exports.getOne = (req, res, next)=>{
  res.json({'msg': 'get single product'})
}

exports.put = (req, res, next)=>{
  res.json({'msg': 'put single product'})
}

exports.patch = (req, res, next)=>{
  res.json({'msg': 'product patched'})
}

exports.deleteOne = (req, res, next)=>{
  res.json({'msg': 'delete product'})
}