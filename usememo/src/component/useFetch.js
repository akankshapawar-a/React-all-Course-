import React,{useState,useEffect}from 'react';

const useFetch = () => {
    const [data, setdata]=useState([]);

    useEffect(()=>{
      async function getData(){
      const call=await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"); 
  
      const res=call.json();
      setdata(res)
            }      //dummyapis.com                                        //for creating an api
    },[]);
  return [data];
    
}

export default useFetch
