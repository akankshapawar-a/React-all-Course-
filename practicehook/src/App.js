import './App.css';
import { useState } from 'react';

function App() {
//we get 2 things from usestate 1.inital value , and  2 .function
let [counter ,setcounter]=useState(15)
  // let counter=15; this varaiable updated but never reflected in ui

const addValue=()=>{
  //console.log("value",Math.random());
if(counter<20){
  counter=counter+1 
  setcounter(counter)
  //setcounter(counter +1)
}
}
const removeValue=()=>{
  if(counter>0){
  setcounter(counter-1)//only once it will works for that need to create prevoius state
  setcounter(counter-1)

}
}
  return (
    <>
    <h1>Chai aur code </h1>
    <h1>Counter vlaue:{counter}</h1>
    
    <button
    onClick={addValue}>Add Value:{counter}</button>
    <br/>
    <button
    onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
// react controls ui updation
// babel automatically inject a code 
// Usestate is responsable for changing state in Ui(DOM)