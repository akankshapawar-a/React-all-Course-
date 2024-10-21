// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import Comp from "./Comp";
// class App extends React.Component {
//  state={
//   name:'',
//   count:0,
//  show:true
//  }
//  inc=()=>{
//   this.setState((prevState)=>({count: prevState.count+1}))
//  }
//  componentDidMount(){
//   this.setState({count:10})
//  }

//  componentDidUpdate(prevProps ,prevState){
//   if(prevState.name!=this.state.name){
// this.setState({prevName:prevState.name})
//  }

 
// }
//   render(){
//     let child;
//     if(this.state.show){
//       child=<Comp/>
//     }

    
//   return (
//     <>
//       <h1>Class Component</h1>
//       <h1>{this.state.name}</h1>
     
//       <input value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.inc}>Inc</button>

//       {child}
//       <button onClick={()=>this.setState}>Delete</button>
//     </>
//   );
// }
// }

// export default App;


import React, { useState, useEffect ,useMemo} from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title =`You clicked ${count} times`;
  });

  const expcal=(num)=>{
    console.log("calculating")
    for(let i=0;i<1000000;i++){

    }
    return num;
  }

const calculation=useMemo(()=>{
  expcal();  
},[count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <input type="text" onChange={expcal()} placeholder='enetr something'/>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default App;
