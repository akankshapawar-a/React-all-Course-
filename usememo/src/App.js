import './App.css';
import { useState ,useEffect} from 'react';
import Header from './component/Header';
import useFetch from './component/useFetch';



function App(){
  const [data]=useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
  return(
    <>
    <Header/>
    {data.map((e,i)=>{
      return <h1 hey={i}>{e.firstName}</h1>
    })}
    </>
  )
}

export default App







//useReducer
{/*import './App.css';
import { useReducer } from 'react';
import Header from './component/Header';
const reducer=(state, action)=>{
  if(action.type=="INC"){
  return state+2;
  }
  else if(action.type=="DEC"){
     return state-2;
  }
  else if(action.type=="MUL"){
       return state*2;
  }
  // console.log("state:" , state)
  // console.log("action:" , action)
  return state;
}
//dispatch performs a action
function App() {

  const [state ,dispatch]=useReducer(reducer , 0);
  return (
    <>
    <Header/>
    <h1>{state}</h1>
    
    <button onClick={()=>dispatch({type:"INC"})}>Inc</button> 
    // instead of direct written funcation use dispatch 
    <button onClick={()=>dispatch({type:"DEC"})}>Dec</button>
    <button onClick={()=>dispatch({type:"MUL"})}>Multiply</button>
    </>
  );
}

export default App;

*/}




