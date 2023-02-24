
const productDetails = require('../service/product.service')

module.exports = {
    productAdd: async (req, res) => {
    try {
        await productDetails.productAdd(req, res)
    } catch (err) {
        console.log(err)
    }
    },
    productGet: async (req, res) => {
    try {
      await productDetails.productGet(req, res)
    } catch (err) {
      console.log(err)
    }
    },
    productFav: async (req, res) => {
    try {
        await productDetails.productFavAdd(req, res)
    } catch (err) {
        console.log(err)
    }
    },
    productFavGet: async (req, res) => {
    try {
        await productDetails.productFavGet(req, res)
    } catch (err) {
        console.log(err)
    }
    },
    
}