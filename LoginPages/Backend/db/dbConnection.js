const mongoose=require('mongoose');
const connectDB=async ()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/Pratice');
    }
    catch(error){
        console.log(error);
    }
}