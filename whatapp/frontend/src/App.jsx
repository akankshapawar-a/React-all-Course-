import React,{useState} from 'react'
import Login from './components/account/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import ChatApplication from './components/account/ChatApplication/ChatApplication';

function App() {
const clientId='222608378718-6dd4of1jldknta1ts7jeu2k28em70ujc.apps.googleusercontent.com';

  return (
   <>
   <Router>
     <GoogleOAuthProvider clientId={clientId}>
     <Routes>
     <Route path='/'element={<Login/>}/>

      <Route path='/Whatsapp'element={<ChatApplication/>}/>
     </Routes>
    </GoogleOAuthProvider>
    </Router>
   </>
  )
}

export default App
