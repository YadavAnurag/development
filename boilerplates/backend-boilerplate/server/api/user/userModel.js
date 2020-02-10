const mongoose = require('mongoose')
const Schema = mongoose.Schema


shippingAddress = {
  streetAddress: {
    type: String,
    default: '',
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  addressText: {
    type: String,
    required: true
  }
}

accountStatus = {
  blocked: {
    type: Boolean,
    default: false 
  },
  active: {
    type: Boolean,
    default: true 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true  
  },
  address: shippingAddress,
  accountStatus: accountStatus
})

UserSchema.methods = {
}

userModel = mongoose.model('users', UserSchema)
module.exports = userModel