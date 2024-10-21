const express =require('express');
const app=express();
const port=8000;
const connectDB=require('./db/dbConnection');

const User= require('./db/user');

app.use(express.json());

app.post('/register',async (req ,res)=>{
    try{
        const{username , password}=req.body;
        const user=new User({username , password});
        await user.save();
        res.status(201).json({message:'Registration Successful '})
    }
    catch{
        res.status(500).json({error:'Registration Failed'});
    }




})



app.post('/login', async(req ,res)=>{
    try{
      const {username , password}=req.body;
      const user=await User.findOne({username});

      if(!user){
        return res.status(401).json({error:'Invalid username or password'});
      }

      if(user.password !== password){
        return res.status(401).json({error:'Inavlid username or password'});
      }

      res.status(200).json({message:'Login Successful'})
}

catch(error){
    res.status(500).json({error:'Login Failed'})
}
}

)


app.listen(port,()=>{
    console.log('Server is lsiteing on port 8000')
});


module.exports=connectDB;