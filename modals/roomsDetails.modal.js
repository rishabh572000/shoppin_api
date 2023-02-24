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
  facility: {
    type: Array,
    required: true,
  }, 
  price: {
    type: Number,
    required: true,
  },
})

const roomsDetails = mongoose.model('Rooms', RoomsSchema)

module.exports = roomsDetails
