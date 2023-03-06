
const roomsDetails = require('../service/rooms.service')

module.exports = {
    roomsSearch: async (req, res) => {
    try {
        await roomsDetails.roomsAdd(req, res)
    } catch (err) {
        console.log(err)
    }
    },
    roomsSearchGet: async (req, res) => {
    try {
        await roomsDetails.roomsSearchGet(req, res)
    } catch (err) {
        console.log(err)
    }
    },
    roomBooking: async (req, res) => {
    try {
        await roomsDetails.roomsPayment(req, res)
    } catch(err){
        console.log(err)
    }
    },
    
}