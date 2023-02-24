const express = require('express')
const app = express();
const router = express.Router()
const product = require('../controller/product.controller');
const { userProfile } = require('../middlewares/multerUpload');

app.use(express.json());
router.post('/product-add', userProfile.fields([{ name: 'productImage', maxCount: 10 }]), product.productAdd)
router.get('/product-add', product.productGet)
router.post('/product-add-fav', product.productFav)
router.get('/product-add-fav', product.productFavGet)
module.exports = router