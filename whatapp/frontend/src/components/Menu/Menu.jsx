import React, { useState, useEffect } from 'react';
import UserChat from '../UserChats/UserChat';
import Contact from '../Contact/Contact';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Menu = ({ onSelectChat }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const navigate = useNavigate();
  


  

  const handleSelectChat = (chat) => {
    onSelectChat(chat);
  }
 
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      axios.get(`http://localhost:5000/api/profile/${userEmail}`)
        .then(response => {
          setUserProfile(response.data);
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    } else {
      console.error('No user email found in localStorage');
      navigate('/'); // Redirect to login if no email found
    }
  }, [navigate]);

  return (
    <div className=''>
      <div className='flex pb-2 w-full'>
        <div className='mt-3 ml-3 cursor-pointer' onClick={() => setIsDrawerOpen(true)}>
          <p className='text-lg'>Chat</p>
        </div>
        
        <div className='flex float-right justify-end w-full mr-3 mt-4 gap-3 relative'>
          <div 
            className="cursor-pointer"
            onMouseEnter={() => setHoveredIcon('status')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className={`absolute top-5 ml-6 z-10 scale-0 bg-white border border-black p-1 text-xs text-black ${hoveredIcon === 'status' ? 'scale-100' : 'hidden'}`}>Status</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chart-arcs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" /><path d="M3 12a9 9 0 1 0 9 -9" /></svg>
          </div>
          <div 
            className="cursor-pointer"
            onMouseEnter={() => setHoveredIcon('chats')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className={`absolute top-5 ml-6 z-10 scale-0 bg-white border border-black p-1 text-xs text-black ${hoveredIcon === 'chats' ? 'scale-100' : 'hidden'}`}>Chats</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" /></svg>
          </div>
          <div 
            className="cursor-pointer"
            onMouseEnter={() => setHoveredIcon('menu')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <span className={`absolute top-5 ml-6 z-10 scale-0 bg-white border border-black p-1 text-xs text-black ${hoveredIcon === 'menu' ? 'scale-100' : 'hidden'}`}>Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
          </div>
        </div>
      </div>
      <hr/>




<div className='bg-white w-3/4 p-2'>

      <UserChat onSelectChat={handleSelectChat} />
        </div>
        <div className=' bg-white w-1/4 p-2'>
        <Contact  onSelectChat={onSelectChat}  />

        </div>



      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-100 w-1/3 z-10">
          <div className='pl-4 text-2xl py-2 bg-white'>
            <div className="float-right">
              <button onClick={() => setIsDrawerOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
              </button>
            </div>
            <p className='font-bold'>Profile</p>
          </div>
          <div className='items-center py-10 px-10'>
            <div className='rounded-full bg-white w-28 ml-20'>
              <img src={userProfile.profilePhoto} className='w-28 h-28 rounded-full' alt="Profile" />
            </div>
          </div>
          <hr />
          <div className='bg-white'>
            <p className='text-start text-emerald-600 ml-2'>Your name</p>
            <p className='text-start ml-2'>{userProfile.username}</p>
          </div>
          <div className='bg-white mt-10'>
            <p className='text-start text-emerald-600 ml-2'>About</p>
            <p className='text-start ml-2'>xyz</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
