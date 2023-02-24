const RoomsModal = require('../modals/roomsDetails.modal');
const express = require('express');
const app = express();


app.use(express.json());
module.exports = {

roomsAdd: async (req, res) => {
      
  try{
    const {hotel_name, address, facility, price} =req.body;

    const rooms = {hotel_name, address, facility, price}
    console.log("🚀 ~ file: rooms.service.js:15 ~ roomsAdd: ~ rooms", rooms)
   
  
    const myRooms = await RoomsModal.create(rooms)
      res.status(201).send(myRooms);

  }
  catch(e){
    res.status(400).send(e);
  }

  },

  roomsSearchGet: async(req, res)=>{
    try{
      // const {email, password} = req.query;
      
      const rooms = await RoomsModal.find()
      res.send(rooms);
  }
  catch(e){
    res.status(400).send(e);
  }

  }

}