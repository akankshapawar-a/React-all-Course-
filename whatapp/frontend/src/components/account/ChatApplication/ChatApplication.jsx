import React  ,{ useState} from 'react'
import Menu from '../../Menu/Menu'
import ChatMaessage from '../../ChatMessage/ChatMaessage'
const ChatApplication = () => {
  


  const [selectedChat, setSelectedChat] = useState(null);
  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <>
    <div className='bg-emerald-600 h-20  flex justify-left '>
      <h1 className='text-emerald-600'>.</h1>
    </div>
    <div className='absolute top-2/4 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen mt-15 bg-white w-11/12 rounded-sm shadow-xl shadow-gray-400 flex '>
    <div className='w-1/2 '>
    <Menu onSelectChat={handleSelectChat}/>
    </div>
    <div className='w-full'>
      <ChatMaessage chat={selectedChat} />
    </div>
    </div>
    </>
  )
}

export default ChatApplication
