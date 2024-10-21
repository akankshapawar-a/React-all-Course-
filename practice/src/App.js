import logo from './logo.svg';
import './App.css';
import React ,{useState , useEffect} from 'react';
import Header from './component/Header';

function App() {
  const[no, setNo]=useState(1);
   const[state ,setState]=useState(10);
   const [data,setData]=useState(0);
  useEffect(()=>{
    async function getData(){
      const get=await fetch("https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001");
    const res=await get.json();
      setData(get);

    };
    getData();
    document.title='(${state}) Employees';
    //window.alert("useEffect call");
  },[state]
  )
  function inc(){
    setNo(no+1);
  }
  function dec(){
    setNo(no-1);
  }

  return (
<>
<div className="App">
<Header/>
{console.log("Inside JSX")}
<div className="main">
  <h1 className='heading'>{no}</h1>
  <button onClick={inc} type="button" className="btn btn-primary ">incremental</button>
  <button onClick={dec}type="button" className="btn btn-primary ">decremental</button>
   <button onClick={()=>setState(state+1)}>Click Me{state}</button>
   {
  data.content.map((element ,index) =>{
return(
  <div key={index}>
   <h4>{element.firstName}</h4> 
   <h4>{element.lastName}</h4> 
   <h4>{element.email}</h4> 


  </div>
)
    })
   };
</div>
</div>


</>
  );
}

export default App;
