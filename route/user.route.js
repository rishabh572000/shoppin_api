const express = require('express')
const app = express();
const router = express.Router()

const user = require('../controller/user.controller')

app.use(express.json());
router.post('/signup', user.signupUser)
router.get('/signup', user.loginUser)
module.exports = router