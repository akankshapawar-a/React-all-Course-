import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import profile from './components/profile';
function App() {
  return (
    <>
    <UserContextProvider>
      <h1>React </h1>
    </UserContextProvider>
   <Login/>
   <profile/>
      
      
    </>
  );
}

export default App;
