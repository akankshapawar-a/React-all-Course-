import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { ReactDOM } from "react-dom";
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode ,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgrouncolor="black";
    }else{
      setMode('light');
      document.body.style.backgrouncolor="white";

    }
  }
  return (
    <>
{/*<Navbar title="Textutils" abouttext="About"/>*/}
{/*<Navbar/>*/}
<Router>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
  <Routes>
          <Route exact path="/about" element={  <About />}>
          
          </Route>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}>
           

          </Route>
          </Routes>
        </div>
        </Router>


    </>
   
  );
}


export default App;
