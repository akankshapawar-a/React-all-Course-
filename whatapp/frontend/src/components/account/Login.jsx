
// import React, { useState } from 'react';
// import { BrandWhatsapp } from 'tabler-icons-react';
// import { qrCodeImage } from '../../Data/Data';
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// const Login = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   // const [userEmail, setUserEmail] = useState('');
//   const navigate = useNavigate();
//   const onLoginSuccess = async (res) => {
//     const userProfile = jwtDecode(res.credential); // Make sure to decode the token to get user information
//     const userData = {
//       username: userProfile.name,
//       email: userProfile.email,
//       profilePhoto: userProfile.picture,
//     };
//     // Send user data to the backend
//     if(!userData){
//     await fetch('http://localhost:5000/api/save-user', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     localStorage.setItem('userEmail',userData.email);
//   }
//     navigate('/Whatsapp');
//     setLoggedIn(true);
// // }catch(error){
// //   console.error('Error saving user', error);
// // }
//   };

//   const onLoginError = (res) => {
//     console.log('Login Failed', res);
//   };

//   const handleLogout = () => {
//     googleLogout();
//     setLoggedIn(false);
//     // setUserEmail('');
//     localStorage.removeItem('userEmail'); 
//   };

//   return (
//     <>
//       <div className='bg-emerald-600 h-56 flex justify-left'>
//         <div className='items-center ml-20 pl-7 mt-8'>
//           <BrandWhatsapp size={45} strokeWidth={1.5} color={'white'} className='justify-center' />
//         </div>
//         <div className='items-center'>
//           <h1 className='uppercase text-white text-center font-bold mt-11 ml-2'>
//             whatsapp web
//           </h1>
//         </div>
//       </div>
//       <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen mt-15 bg-white w-10/12 rounded-sm shadow-xl shadow-gray-400 flex space-x-12'>
//         <div className='ml-10 pl-10'>
//           <h1 className='text-slate-800 text-4xl font-extralight mt-8'>
//             Use WhatsApp on your computer
//           </h1>
//           <ol className='mt-12 text-xl font-extralight'>
//             <li className='mb-4'>1. Open WhatsApp on your phone</li>
//             <li className='mb-4'>2.Tap Menu Settings and select WhatsApp Web</li>
//             <li className='mb-4'>3. Point your phone to this screen to capture the code</li>
//           </ol>
//         </div>
//         <div className='mt-12 ml-4'>
//           <img src={qrCodeImage} alt="QR Code" />
//           {loggedIn ? (
//             <>
//               <p>You are logged in!</p>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <div className='absolute top-1/3 left-3/4 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white'>
//               <GoogleLogin
//                 width={40}
//                 onSuccess={onLoginSuccess}
//                 onError={onLoginError}
//               />
//               <p>Please login to continue.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { BrandWhatsapp } from 'tabler-icons-react';
import { qrCodeImage } from '../../Data/Data';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onLoginSuccess = async (res) => {
    const userProfile = jwtDecode(res.credential); // Decode the token to get user information
    const userData = {
      username: userProfile.name,
      email: userProfile.email,
      profilePhoto: userProfile.picture,
    };
    
    try {
     
      await fetch('http://localhost:5000/api/save-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

     
      localStorage.setItem('userEmail', userData.email);
      
     
      navigate('/Whatsapp');
      setLoggedIn(true);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const onLoginError = (res) => {
    console.log('Login Failed', res);
  };

  const handleLogout = () => {
    googleLogout();
    setLoggedIn(false);
    localStorage.removeItem('userEmail');
  };

  return (
    <>
      <div className='bg-emerald-600 h-56 flex justify-left'>
        <div className='items-center ml-20 pl-7 mt-8'>
          <BrandWhatsapp size={45} strokeWidth={1.5} color={'white'} className='justify-center' />
        </div>
        <div className='items-center'>
          <h1 className='uppercase text-white text-center font-bold mt-11 ml-2'>
            whatsapp web
          </h1>
        </div>
      </div>
      <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen mt-15 bg-white w-10/12 rounded-sm shadow-xl shadow-gray-400 flex space-x-12'>
        <div className='ml-10 pl-10'>
          <h1 className='text-slate-800 text-4xl font-extralight mt-8'>
            Use WhatsApp on your computer
          </h1>
          <ol className='mt-12 text-xl font-extralight'>
            <li className='mb-4'>1. Open WhatsApp on your phone</li>
            <li className='mb-4'>2.Tap Menu Settings and select WhatsApp Web</li>
            <li className='mb-4'>3. Point your phone to this screen to capture the code</li>
          </ol>
        </div>
        <div className='mt-12 ml-4'>
          <img src={qrCodeImage} alt="QR Code" />
          {loggedIn ? (
            <>
              <p>You are logged in!</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <div className='absolute top-1/3 left-3/4 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white'>
              <GoogleLogin
                width={40}
                onSuccess={onLoginSuccess}
                onError={onLoginError}
              />
              <p>Please login to continue.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
