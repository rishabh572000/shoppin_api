const RoomsModal = require('../modals/roomsDetails.modal');
const RoomPayment = require('../modals/roomConfirm.modal')
const express = require('express');
const app = express();


app.use(express.json());
module.exports = {

roomsAdd: async (req, res) => {
    
try{
  const {hotel_name, address, amenities, price, hotel_policies} =req.body;

  const rooms = {hotel_name, address, amenities, price, hotel_policies}

  if(req.files){
    let media=[]
    req.files.docs.map((val, ind)=>{
      media.push(val.path)
    })
    rooms.docs = media
  }

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

},

roomsPayment: async (req, res) => {
    
  try{
    const {hotel_name, address, price, discount, payable_amount, name, email, phone, checkIn, checkOut, no_of_room, guest} =req.body;
  
    const rooms = {hotel_name, address, price, discount, payable_amount, name, email, phone, checkIn, checkOut, no_of_room, guest}

    const myRooms = await RoomPayment.create(rooms)
    res.status(201).send(myRooms);
  
  }
  catch(e){
    res.status(400).send(e);
  }
  
  },

}