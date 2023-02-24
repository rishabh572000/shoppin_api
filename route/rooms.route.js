const express = require('express')
const app = express();
const router = express.Router()
const rooms = require('../controller/rooms.controller');
const { userProfile } = require('../middlewares/multerUpload');

app.use(express.json());
// router.post('/product-add', userProfile.fields([{ name: 'productImage', maxCount: 10 }]), product.productAdd)
// router.get('/product-add', product.productGet)
// router.post('/product-add-fav', product.productFav)
router.post('/search-rooms', rooms.roomsSearch)
router.get('/search-rooms', rooms.roomsSearchGet)
module.exports = router