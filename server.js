require('./connect');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;
const userSignup = require("./route/user.route");
const productAdd = require("./route/product.route");
const roomsAvailable = require("./route/rooms.route");
app.use(cors());

app.use(express.json());

app.use("/v1/user", userSignup);
app.use("/v1/product", productAdd);
app.use("/v1/rooms", roomsAvailable);


app.listen(port, ()=>{
    console.log(port, 'my port nomber')
})
