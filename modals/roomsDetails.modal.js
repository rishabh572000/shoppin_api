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
  amenities: {
    type: Array,
    required: true,
  }, 
  price: {
    type: Number,
    required: true,
  },
  rating:{
    type:Array,
    trim: true
  },
  description:{
    type:String,
    trim: true
  },
  docs:{
    type:Array,
    trim: true
  },
  hotel_policies:{
    type:Array,
    trim: true
  },
  room_available:{
    type:Number,
    trim: true
  }

})

const roomsDetails = mongoose.model('Rooms', RoomsSchema)

module.exports = roomsDetails
