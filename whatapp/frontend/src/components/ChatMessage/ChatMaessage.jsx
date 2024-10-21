import React ,{useState} from 'react'
import { emptyChatImage} from '../../Data/Data'
import Footer from '../Footer/Footer'
// import UserChat from '../UserChats/UserChat'
// import Profile from '../DrawerProfile/Profile'
const ChatMaessage = ({chat}) => {
  //  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
    {chat ? (
    
      <div className=' bg-gray-100 h-12  justify-left '>
        <div className='flex  space-x-10 '>
         <div className='ml-3 my-2'>
          <img src={chat.profilePhoto} alt="Profile" className="rounded-full w-8 h-8" />
        </div>
        <h2 className='ml-3 my-2 font-bold' > {chat.username}</h2>
       
        <p>{chat.message}</p>
        <div className=' float-right ml-20 my-2 flex'>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
        </div>
        
      
        </div>
        
      </div>
      
     
    ) : (
      <div className='h-full'>
        <img src={emptyChatImage} className='h-full' alt="No chat selected" />
      </div>


    )}
    <div className=' h-5/6' style={{backgroundImage:'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")'}}>.</div>

    <Footer/>
  </>

  )
}

export default ChatMaessage
