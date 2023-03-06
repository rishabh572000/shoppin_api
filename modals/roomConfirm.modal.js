const mongoose = require('mongoose')

const RoomsSchema = new mongoose.Schema({
  hotel_name: {
    type: String,
    required: true,
    trim: true
  }, 
  address: {
    type: String,
    required: true,
    trim: true
  },  
  price: {
    type: Number,
    required: true,
  }, 
  discount: {
    type: Number,
    required: true,
  }, 
  payable_amount: {
    type: Number,
    required: true,
  }, 
  checkIn: {
    type: Date,
    required: true,
  }, 
  checkOut: {
    type: Date,
    required: true,
  }, 
  no_of_room: {
    type: Number,
    required: true,
  }, 
  guest: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  }, 
  phone: {
    type: Number,
    required: true,
  },

})

const roomConfirm = mongoose.model('PaymentRoom', RoomsSchema)

module.exports = roomConfirm
