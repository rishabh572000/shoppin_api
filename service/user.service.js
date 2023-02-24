const UserModal = require('../modals/user.modal');
const express = require('express');
const app = express();


app.use(express.json());
module.exports = {
  signupUser: async (req, res) => {
      const {first_name, last_name, email, password, phone, address} =req.body
  try{
    const user = new UserModal({
      first_name,
      last_name,
      email,
      password,
      phone,
      address
    })
    const getUser = await UserModal.find({email,password});
    let createUser
    if(getUser.length>0){
      res.status(201).send({message:'User already exist'});
    }
    else{
      createUser = await user.save();
    }
    res.status(201).send(createUser);
  }
  catch(e){
    res.status(400).send(e);
  }

  },
  loginUser: async(req, res)=>{
  try{
    const {email, password} = req.query;

    const user = await UserModal.find({email,password})
    res.send(user);
  }
  catch(e){
    res.send(e);
  }

  }

}