import React, { useState ,useEffect, useCallback} from 'react';
import axios from 'axios';
const UserChat = ({ chat }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [query , setQuery]=useState(' ');
  const[result , setResult]=useState([]);

  const handleChange = useCallback(async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      try {
        const response = await axios.get(`http://localhost:5000/search?q=${value}`);
        setResult(response.data);
      } catch (error) {
        console.error('Error searching users:', error);
      }
    } else {
      setResult([]);
    }
  }, []);

  return (
    <div>
      <div className='m-2 flex w-full'>
        <form className="w-full">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white " >Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" 
            id="default-search" 
            value={query}
            onChange={handleChange}
            className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Search " required />
          </div>
        </form>
        <div className='ml-2 mt-1 cursor-pointer'
          onMouseEnter={() => setHoveredIcon('Unread chats filter')}
          onMouseLeave={() => setHoveredIcon(null)}>
          <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" fill="none">
            <title>Unread chats filter</title>
            <path d="M11 18C10.7167 18 10.4792 17.9042 10.2875 17.7125C10.0958 17.5208 10 17.2833 10 17C10 16.7167 10.0958 16.4792 10.2875 16.2875C10.4792 16.0958 10.7167 16 11 16H13C13.2833 16 13.5208 16.0958 13.7125 16.2875C13.9042 16.4792 14 16.7167 14 17C14 17.2833 13.9042 17.5208 13.7125 17.7125C13.5208 17.9042 13.2833 18 13 18H11ZM7 13C6.71667 13 6.47917 12.9042 6.2875 12.7125C6.09583 12.5208 6 12.2833 6 12C6 11.7167 6.09583 11.4792 6.2875 11.2875C6.47917 11.0958 6.71667 11 7 11H17C17.2833 11 17.5208 11.0958 17.7125 11.2875C17.9042 11.4792 18 11.7167 18 12C18 12.2833 17.9042 12.5208 17.7125 12.7125C17.5208 12.9042 17.2833 13 17 13H7ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>


      <div>
        {result.map((user) => (
          <div key={user.email}>
            <p>{user.username}</p>
          </div>
        ))}
      </div>

      {/* <div>
        {chat ? (
          <div>
            <h2>Chat with {chat.username}</h2>
            <div>
              <img src={chat.profilePhoto} alt="Profile" className="rounded-full w-10 h-10" />
            </div>
            <p>{chat.message}</p>
          </div>
        ) : (
          <div>
            <img src={emptyChatImage} className='h-full' alt="No chat selected"/>
          </div>
        )}
      </div> */}
    </div>
  )
}

export default UserChat;
