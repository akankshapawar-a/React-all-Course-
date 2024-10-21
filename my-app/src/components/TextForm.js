import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("LowerCase was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleCopy=()=>{
        console.log("I am copy")
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnClick=(event)=>{
        console.log("UpperCase was Clicked");
        setText(event.target.value)
    }
   
    const handleExtraSpaces=()=>{
        let newtext=text.split(/[]+/);
        setText(newtext.join(" "))
    }
    const [text,setText]=useState('Enter text here2');
 
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnClick} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Spaces</button>

    </div>
    <div className="container">
        <h4>Your text summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length}</p>
        <h5>Preview</h5>
           <p>{text.length>0?text:"Enter something to preview it here"}</p>
           <p>{text}</p>
       </div>
          

</>
  )
}
