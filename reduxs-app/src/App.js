import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Inc , Dec} from './states/reducers/index';
function App() {
  const curState=useSelector((state)=> state.number);// useSelector hook to access the redux store's state
  const dispatch=useDispatch();//access redux discpath function
  return (
    <div className="App">
      <h1>React Redux Tutorial</h1>
      <div stye={{width :'100%',display:'flex',alignItems:'center'}}>
      <h1>{curState}</h1>

    <button onClick={()=> dispatch(Inc(1))}>Inc</button>
    <button onClick={()=>dispatch(Dec(6))}>Dec</button>{/* give value in funcation for inc and dec  */}
    
      </div>
   
    </div>
  );
}

export default App;

