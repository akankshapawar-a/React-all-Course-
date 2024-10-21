// server/routes/userRoutes.js
import express from 'express';
import User from '../model/User.js';

const router = express.Router();

// Endpoint to save user data
router.post('/save-user', async (req, res) => {
  const { username, email, profilePhoto } = req.body;

  const user = new User({
    username,
    email,
    profilePhoto,
  });

  
  try {
    await user.save();
    res.status(200).json({ message: 'User saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }

});


// router.get('/profile/:email',async(req,res)=>{
//   const {email}=req.params;

//   try{
//  const user=await User.findOne({email}).select('_id username email profilePhoto ');
//  if(!user){
//   return res.status(404).json({message:'User not found'});
//  }

//  res.status(200).json(user);
//   }catch(error){
//           res.status(500).json({message:'Error fetching user profile',error});
//   }
// })

// router.get('/profile/:email', async (req, res) => {
//    const { email } = req.params;

//   try {
//     const user = await User.findOne({ email }).select('-_id username email profilePhoto');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user profile', error});
//   }
// });


router.get('/profile/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email }).select('-_id username email profilePhoto');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});



// router.get('/profiles',async(req,res)=>{
//   try {
//     const user=await User.find();
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);


//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });

//   }
// })


// router.get('/profiles', async (req, res) => {
//   try {
//     const users = await User.findOne("email"); 

//     if (users.length === 0) {
//       return res.status(404).json({ message: 'No users found' });
//     }

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });


router.get('/profiles', async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    const seenUsernames = new Set();
    const uniqueUsers = [];

    users.forEach(user => {
      if (!seenUsernames.has(user.email)) {
        seenUsernames.add(user.email);
        uniqueUsers.push(user);
      }
    });

    res.status(200).json(uniqueUsers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.json([]);
  }

  try {
    const users = await User.find({ username: { $regex: query, $options: 'i' } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error });
  }
});











export default router;

