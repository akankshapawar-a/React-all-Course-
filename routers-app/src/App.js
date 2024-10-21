import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {useState ,createContext} from "react";
import Home from './Home';
import About from './About';
import Error from './Error';
import ComA from './comp/ComA';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useActionData
} from "react-router-dom";

const AppState=createContext();


function App() {
  const[name,setName]=useState({name:'samarth',age:18});
  const[data ,setData]=useState("web3Mantra")

  return (
    
    <Router>
<>
<AppState.Provider value={{data , name}}>
<ComA />
<Header/>
</AppState.Provider>
<Routes>
<Route path="/" element={  <Home />}>
          
          </Route>
          <Route path="/about" element={  <About />}>
          
          </Route>

          <Route path="*" element={  <Error />}>
          
          </Route> 
          
        </Routes>

</>
</Router>
  );
}

export default App;
export {AppState}