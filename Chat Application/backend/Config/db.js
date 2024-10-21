const mongoose=require("mongoose");
const mongoURL="mongodb://127.0.0.1:27017/ChatApplication"
const connectDB=async()=>{
    try{
      const conn=await mongoose.connect(mongoURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
      
      });

      console.log(`Connection Successfully on ${conn.connection.host}`);
    }catch(error){
console.log(`Error: ${error.message}`);
process.exit();
    }
};

module.exports=connectDB;