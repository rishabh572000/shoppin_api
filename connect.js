const mongooes = require('mongoose');

const connect = mongooes.connect('mongodb://127.0.0.1:27017/shopping')
.then(()=>console.log('connection successfully...'))
.catch((err)=> console.log(err))

module.exports=connect