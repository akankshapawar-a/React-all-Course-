const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/privatechat').then(()=>{
    console.log("connected to mongoDb");
}).catch((error)=>{
    console.log("Mogodb is failed to connect",error);

})