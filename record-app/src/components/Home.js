import React from 'react'

function Home() {
  return (
    const [name,setName]=useState(" ");
    const [email ,setEmail]=useState(" ");
    const[data ,setdata]=useState([]);
    const addData=()=>{
      setdata([...data,{ name, email}]);
      setName("");
      setEmail("");
    }
    return (
      <div className="App">
  <Header/>
  <div className='form'>
  <Stack direction="row" spacing={2}>
  <TextField value={name} onChange={(event)=>setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
  <TextField value={email} onChange={(event)=>setEmail(event.target.value)} id="outlined-basic" label="email" variant="outlined" />
  <Button onClick={addData} variant="contained" color="error">
    <AddIcon/>
        </Button>
        </Stack>
      </div>
  <div className="data">
  <div>
  <div className='data_val'>
    <h4>Name</h4>
    <h4>Email</h4>
    <h4>Remove</h4>
  
  </div>
  {
    data.map((element,index)=>{
      return(
  <div key={index}>
  
  
  </div>
        )
    })
  }
  </div>
  
  </div>
      </div>
    );
  )
}

export default Home
