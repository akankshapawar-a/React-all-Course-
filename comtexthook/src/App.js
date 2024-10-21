import './App.css';
import Header from './component/Header';
import CompA from './component/CompA';
import React,{useState, createContext} from 'react';
const AppState= createContext();
function App() {
  const [data , setData]=useState("WedMantra")

  return (
    <>
    <AppState.Provider value={data}>
      <Header/>
       <h1>home</h1>
       <CompA/>
       </AppState.Provider>
    </>
  );
}

export default App;
export {AppState}