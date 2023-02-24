const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  }, 
  last_name: {
    type: String,
    required: true,
    trim: true
  }, 
  email: {
    type: String,
    required: true,
  }, 
  password: {
    type: String,
    required: true,
  }, 
  phone: {
    type: Number,
    trim: true
  }, 
  address: {
    type: String,
    trim: true
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
