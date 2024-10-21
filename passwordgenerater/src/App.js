// usecallback stores value in memory
//useeffect used for syncronize a component with external system
//useref - reference ( returns mutable ref obejects)-if you are takeing a reference of anything that time useRef is used
import {useState , useCallback , useEffect , useRef} from 'react';
function App() {
  const [length , setlength]=useState(0);
  const[numberallowed ,setnumberallowed]=useState(false);
  const[charallowed ,setcharallowed]=useState(false);

  const [password , setpassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLMNBVCXZqwertyuioplkjhasdfgmnbvzxc"

    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*(){}[]~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* str.length +1)
      pass +=str.charAt(char)
    }
    setpassword(pass)
  },[length ,numberallowed ,charallowed ,setpassword ])  //if changes then optimize it for that

  // just storing into a cache memory not executed 
//setpassword for optimization
 

const copypassword=useCallback(()=>{
  passwordRef.current?.select()// is there current object or not, selectable or not
  passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
},[password])


 //no need to store in varable 
useEffect(()=>{// when our page loads first time call
passwordGenerator();
  },[length , numberallowed , charallowed, passwordGenerator])  // if changes then re-run it again

  return (
<>
<div className='w-full max-w-md mx-auto shadow-md round-lg px-4 my-8 text-orange-500 bg-gray-700 '>
  <input 
  type="text"
  value={password}
  className='outline-none w-full py-1 px-3'
  placeholder='Password'
  readOnly
  ref={passwordRef}
  />

  <button
  
  onClick={copypassword}>Copy</button>
</div>
<div>
<input type="range"
min={6}
max={50}
value={length}
className='cursor-pointer'
onChange={(e)=>{setlength(e.target.value)}
}
/>
<label>Length :{length}</label>
</div>
<div>
  <input 
  type="checkbox"
  defaultChecked={numberallowed}
  id="numberInput"
  onChange={()=>{
    setnumberallowed((prev)=>!prev);
  }}

  />

  <label htmlform="numberInput">Numbers</label>
</div>

<div className='flex items-center gap-x-1'>
  <input
  type="checkbox"
  defaultChecked={charallowed}
  id="charInput"
  onChange={()=>{
    setcharallowed((prev)=>!prev);
  }}
  />
   <label htmlform="charInput">Characters</label>

</div>
</>
  );
}

export default App;
