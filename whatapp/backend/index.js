import mongoose from "mongoose";
import  express  from "express";
import UserRouter from './routes/UserRoute.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port =5000;


mongoose.connect('mongodb://127.0.0.1:27017/whatsapp').then(()=>{
    console.log("connected to mongoDb");
}).catch((error)=>{
    console.log("Mogodb is failed to connect",error);

})

  
app.use(cors())
app.use(express.json())
app.use('/api',UserRouter)
// app.use('/api',blogRouter)
// app.use('/api/comment',commentRouter)



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

