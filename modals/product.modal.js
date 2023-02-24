const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    trim: true
  }, 
  price: {
    type: String,
    trim: true
  }, 
  description: {
    type: String,
  }, 
  category: {
    type: Array,
  }, 
  image: {
    type: Array,
    trim: true
  }, 
  details: {
    type: Array,
    trim: true
  }, 
  service: {
    type: Array,
    trim: true
  }, 
  questions: {
    type: Array,
    trim: true
  }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
