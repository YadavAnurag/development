const mongoose = require('mongoose')
const Schema = mongoose.Schema

categoryStatus = {
  display: {
    type: Boolean,
    default: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  productCount: {
    type: Number,
    required: true,
  }
}

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  key: {
    type: String,
    minlength: 3,
    maxlength: 3,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  images: {
    type: [String]
  },
  categoryStatus: categoryStatus
})

CategorySchema.methods = {
}

categoryModel = mongoose.model('categories', CategorySchema)
module.exports = categoryModel