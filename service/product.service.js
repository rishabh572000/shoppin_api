const ProductModal = require('../modals/product.modal');
const ProductFavModal = require('../modals/productFav.modal');
const express = require('express');
const app = express();


app.use(express.json());
module.exports = {

productAdd: async (req, res) => {

  try{
      const {
          product_name,
          price,
          description,
          category,
          details,
          service,
          questions
      } =req.body

      const product = {
        product_name,
        price,
        description,
        category,
        details,
        service,
        questions
      }
      if(req.file){
        product.image = req.file.filename
      }
      const myProduct = await ProductModal.create(product)
      res.status(201).send(myProduct);
    }
    catch(e){
      res.status(400).send(e);
    }

},
productGet: async (req, res) => {
  try{
    const product = await ProductModal.find()
    res.send(product);
  }
  catch(e){
    res.send(e);
  }

},
productFavAdd: async (req, res) => {

    try{
      const { product_id, user_id } = req.body;
      const Favourite = new ProductFavModal({
        product_id,
        user_id,
      })
      let addFavourite = await Favourite.save();
      res.status(201).send(addFavourite);
    }
    catch(e){
      res.status(400).send(e);
    }
    
    },
productFavGet: async (req, res) => {
    try{
      const {user_id} = req.query;
      const user = await ProductFavModal.find({user_id})
      let favProduct=[]
      user.map(async(val, ind)=>{
        const product = await ProductModal.find({_id:user[0].product_id})
        product && favProduct.push([...product])

      })
      res.send(await ProductModal.find({_id:user[0].product_id}))
      
    }
    catch(e){
      res.status(400).send(e);
    }
    
    },
}