
import React, { useEffect, useState } from 'react';

const Contact = ({ onSelectChat }) => {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const userEmail = localStorage.getItem('userEmail');

    try {
      const response = await fetch('http://localhost:5000/api/profiles');
      const data = await response.json();
    
    

      for (const user of data) {
        if (user.email === userEmail) {
          user.username = "You";
          break; 
        }
      }
  
      setChat(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='w-full'>
      {chat.map((chats) => (
        <div key={chats._id} className='py-2'>
          <div
            className='flex space-x-3 cursor-pointer'
            onClick={() => onSelectChat(chats)}
          >
            <div className='mx-1 px-1 mb-2 rounded-full w-10 h-8'>
              <img src={chats.profilePhoto} className='rounded-full w-10 h-8' alt="Profile" />
            </div>
            <div className='mx-1 px-1 mb-2'>
              <p>{chats.username}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Contact;

