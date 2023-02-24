const mongoose = require('mongoose')

const ProductFavSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    trim: true
  }, 
  user_id: {
    type: String,
    required: true,
    trim: true
  }, 

})

const ProductFav = mongoose.model('ProductFav', ProductFavSchema)

module.exports = ProductFav